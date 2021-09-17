const Layout = (props) => {
	return (
		<div className="container-fluid">
			<main className="">{props.children}</main>
		</div>
	);
};

export default Layout;
