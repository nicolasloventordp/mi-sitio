export default function HeaderSocialMedia({ itemsSocialMedia }) {
    return (
        <div className="header-box__socialMedia">
            {itemsSocialMedia?.map( (item, index) => 
                <div>
                    <a href={item.url} target="_blank">{item.icon}</a>
                </div>
            )}
        </div>
    );
}
               