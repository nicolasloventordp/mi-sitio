export default function HeaderTabs({ itemsTabs }) {
    return (
        <div className="header-box__tabs">
            {itemsTabs?.map( (item, index) => <h5  key={index}><a href={"#"+item.href.toLowerCase()}>{item.title.toUpperCase()}</a></h5>)}
        </div>
    );
}
               