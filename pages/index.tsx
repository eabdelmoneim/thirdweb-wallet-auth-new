import {
	useAddress,
	useUser,
	useLogin,
	useLogout,
	useMetamask,
	ConnectWallet,
	useConnect,
	useWallet,
	useConnectionStatus,
} from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

const Home: NextPage = () => {
	const address = useAddress();
	const { user } = useUser();

	return (
		<div className='container'>
			<ConnectWallet
				theme='light'
				auth={{
					loginOptional: false,
				}}
				dropdownPosition={{
					side: 'bottom',
					align: 'center',
				}}
			/>

			<div className='details'>
				<pre>Connected Wallet: {address}</pre>
				<pre>User: {JSON.stringify(user, undefined, 2) || 'N/A'}</pre>
			</div>
		</div>
	);
};

export default Home;
