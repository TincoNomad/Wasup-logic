import { useState, useEffect } from 'react'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig, useAccount, useBalance, useSendTransaction } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { sha256} from 'crypto-hash'
import { QRCode } from "react-qr-code";

const projectId = '7b209bc475a7ee305942deecb8eb8305';

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, polygon]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

const Variables = () => {
  // Estado para almacenar las variables
  const [phonenumber, setPhonenumber] = useState("");
  const [clave1, setClave1] = useState("");
  const [clave2, setClave2] = useState("");
  const [hash, setHash] = useState("");

  // Asignar los valores de las variables al estado
  const handlePhonenumber = (event) => {
    setPhonenumber(event.target.value);
  };
  const handleClave1 = (event) => {
    setClave1(event.target.value);
  };
  const handleClave2 = (event) => {
    setClave2(event.target.value);
  };

  // Mostrar los valores de las variables en el consola log
  const handleSubmit = async () => {
    console.log("Phonenumber:", phonenumber);
    console.log("Contraseña 1:", clave1);
    console.log("Contraseña 2:", clave2);

    if (clave1 === clave2) {
      const hash = await sha256(clave1);
      setHash(hash);
      document.getElementById("hash").textContent = hash;
      document.getElementById("mensaje").textContent = "";
      console.log("Hash:", hash);
    } else {
      console.log("Las contraseñas no coinciden");
      document.getElementById("hash").textContent = "";
      document.getElementById("mensaje").textContent = "Las contraseñas no son las mismas";

    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Phonenumber"
        value={phonenumber}
        onChange={handlePhonenumber}
      /><br/>
      <input
        type="password"
        placeholder="Clave 1"
        value={clave1}
        onChange={handleClave1}
      /><br/>
      <input
        type="password"
        placeholder="Clave 2"
        value={clave2}
        onChange={handleClave2}
      /><br/>
      <button type="submit" onClick={handleSubmit}>Guardar</button>
      <p id="hash"></p>
      <p id="mensaje"></p>
      <br/>
      {hash && (
        <QRCode
          title="GeeksForGeeks"
          value={hash}
          bgColor="#ffffff"
          fgColor="#000000"
          size={200}
        />
      )}
    </div>
  );
};

const IsConect = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const [balanceamount, setBalanceAmount] = useState("");

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>

  const Balance = () =>{
    const { data, isError, isLoading } = useBalance({address:address})
   
    if (isLoading) return <div>Fetching balance…</div>
    if (isError) return <div>Error fetching balance</div>
    const balanceamount = data.formatted
    setBalanceAmount(balanceamount)
    console.log(balanceamount)

    return (
      <div>
        Balance: {data?.formatted} {data?.symbol}
      </div>
    )
  }

  return (
    <div>
      {address}
      <Balance/><br/>
    </div>
  )
}

const SentTransaction = () =>{
  const [amount, setAmount] = useState("");
  const [walletaddress, setWalletAddress] = useState("");

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleWalletAddress = (event) => {
    setWalletAddress(event.target.value);
  };

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({

    to: walletaddress,
    value: amount,
    onError(error) {console.log('Error', error)},
  })

  return (
    <div>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmount}
      /><br/>
      <input
        type="text"
        placeholder="WalletAdress"
        value={walletaddress}
        onChange={handleWalletAddress}
      /><br/>
      <button onClick={() => sendTransaction()}>Send Transaction</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
}

function App() {
  
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
       Rest of your app...
       <br/>
      <Variables/><br/>
      <w3m-button /><br/>
      <IsConect/><br/>
      <SentTransaction/><br/>
    </WagmiConfig>
    </>
  )
}

export default App