
import Footer from '../parts/Footer';
import Header from '../parts/Header/index';
import SiteMap from '../parts/SiteMap';
import Breadcrumb from '../components/Breadcrumb/index';
import SugestionProduct from '../parts/ProductDetailPage/SugestionProduct/index';
import DetailProduct from '../parts/ProductDetailPage/DetailProduct/index';


const Productdetail = () => {
    return (
        <>
            <Header theme="black" position="relative" />
            <Breadcrumb lists={[
                { url: "/", name: "Home" },
                { url: "/categories/91231", name: "Office Room" },
                { url: "/categories/91231/products/7888", name: "Details" },
            ]} />
            <DetailProduct />
            <SugestionProduct />
            <SiteMap />
            <Footer />
        </>
    )
}

export default Productdetail