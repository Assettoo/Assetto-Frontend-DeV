import {
	createContext,
	useEffect,
	useState,
	useCallback,
	useMemo,
} from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import abi from "../utils/contractABI";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Web3Context = createContext({
	balance: null,
	error: null,
	loadWeb3Modal: () => {},
	logoutOfWeb3Modal: () => {},
	accountAddress: "",
	contract: null,
});

const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider,
		options: {
			rpc: {
				868455272153094: " https://godwoken-testnet-web3-v1-rpc.ckbapp.dev/",
			},
		},
	},
};

const Web3ContextProvider = (props) => {
	const [network, setNetwork] = useState("0xaef3");
	const [provider, setProvider] = useState();
	const [signedInAddress, setSignedInAddress] = useState("");

	const web3Modal = useMemo(() => {
		return new Web3Modal({
			providerOptions: providerOptions,
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [network]);

	const { web3, contract } = useMemo(() => {
		const web3 = new Web3(
			provider || "https://godwoken-testnet-web3-v1-rpc.ckbapp.dev/"
		);
		const contract = new web3.eth.Contract(
			abi.abi,
			"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
		);
		return { web3, contract };
	}, [provider]);

	// Modal Controls - Connect and Disconnect Wallets
	const loadWeb3Modal = useCallback(async () => {
		const newProvider = await web3Modal.connect();
		console.log("Connected", newProvider);
		if (!!newProvider.wc) {
			setProvider(newProvider);
			setSignedInAddress(newProvider.accounts[0]);
		} else {
			setProvider(newProvider);
			setSignedInAddress(newProvider.selectedAddress);
		}
	}, [web3Modal]);
	const logoutOfWeb3Modal = useCallback(async () => {
		setSignedInAddress("");
		web3Modal.clearCachedProvider();
		window.location.reload();
	}, [web3Modal]);

	useEffect(() => {
		console.log(provider);
		if (provider) {
			// Subscribe to accounts change
			provider.on("accountsChanged", (accounts) => {
				console.log("accountsChanged", accounts, provider);
			});
			// Subscribe to chainId change
			provider.on("chainChanged", (chainId) => {
				console.log("Provider Chain Changed", chainId, provider);
			});
			// Subscribe to provider connection
			provider.on("connect", (info) => {
				console.log("Provider Connected", info);
			});
			// Subscribe to provider disconnection
			provider.on("disconnect", (error) => {
				console.log("disconnect", error);
			});
		}
	}, [provider]);

	return (
		<Web3Context.Provider
			value={{
				loadWeb3Modal,
				logoutOfWeb3Modal,
				accountAddress: signedInAddress,
				setNetwork,
				contract,
				web3,
			}}>
			{props.children}
		</Web3Context.Provider>
	);
};

// export default Web3ContextProvider;
export { Web3Context, Web3ContextProvider as default };



// https://626face37b18fe0f65a8ed2f--chimerical-stardust-70ccd0.netlify.app/verify/?ipfsHash=${ipfsHash}&certkey=${certkey}