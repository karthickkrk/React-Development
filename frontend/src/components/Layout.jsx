import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="px-6 mx-auto max-w-2xl lg:max-w-7xl">
            <Header />
            <main className="">
                {children}
            </main>
        </div>
    );
};

export default Layout;