export default function HeaderTabsMobile({ itemsTabs, cerrarMenu }) {
    return (
        <div className="header-box__tabs-mobile">
            {itemsTabs?.map( (item, index) => <h5  key={index} onClick={() => cerrarMenu()}><a href={"#"+item.href.toLowerCase()} >{item.title.toUpperCase()}</a></h5>)}
        </div>
    );
}
               