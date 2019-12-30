import React from "react";

export default function Menu({ logOut }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://www.perceptio.co/wp-content/uploads/2018/12/cropped-logo.png"
                        width="200"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </a>
            </nav>
        </div>
    );
}
