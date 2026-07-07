import SideBar from "./SideBar";
import MainContent from "./MainContent";


function AllSalons() {
    return (
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <SideBar />
                <MainContent />
            </div>
        </div>
    );
}

export default AllSalons;