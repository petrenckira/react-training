export default function Navbar({searchState, setSearchState}) {

    return(
            <nav className="navbar">
                <h1>Travel Journal</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search destinations..."
                        value={searchState}
                        onChange={(e) => setSearchState(e.target.value)}
                        className="search-input"
                    />
                </div>
            </nav>
            )
}