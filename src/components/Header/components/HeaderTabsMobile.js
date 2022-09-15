export default function HeaderTabsMobile({ itemsTabs, cerrarMenu }) {
    return (
        <div className="header-box__tabs-mobile">
            {itemsTabs?.map( (tab, index) => <h5  key={index} onClick={() => cerrarMenu()}><a href={"#"+tab.toLowerCase()} >{tab}</a></h5>)}
        </div>
    );
}
               