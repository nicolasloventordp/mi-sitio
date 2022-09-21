import Link from '../../ui/Link'
export default function HeaderTabs({ className, itemsTabs }) {
    return (
        <div className={className}>
            {itemsTabs?.map( (item, index) => 
                <h5  key={index}>
                    <Link href={"#"+item.href.toLowerCase()}>{item.title.toUpperCase()}</Link>
                </h5>
            )}
        </div>
    );
}
               