import Header from './Header/Header';
import Routing from './MainRouting';
import Sidebar from './Sidebar/Sidebar';


const App = () => {
    
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
                     <Routing />
                    </main>
                </div>
            </div>
        </>
    )

};

export default App;