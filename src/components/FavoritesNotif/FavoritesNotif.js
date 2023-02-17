import "./FavoritesNotif.css"

export default function FavoritesNotif(props) {
    return (
        <div className="favorites-notif">
            Number of favorites: {props.nrFavorites}
        </div>
    )
}