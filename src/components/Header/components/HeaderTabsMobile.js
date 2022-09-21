import Link from '../../ui/Link'
export default function HeaderTabsMobile({className, itemsTabs, setIsTabsMobileOpen}) {
    return (
        <div className={className}>
            {itemsTabs?.map( (item, index) => 
                <h5 key={index} onClick={() => setIsTabsMobileOpen(false)}>
                    <Link href={"#"+item.href.toLowerCase()}>
                        {item.title.toUpperCase()}
                    </Link>
                </h5>
            )}
        </div>
    );
}
               