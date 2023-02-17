import "./FavoritesNotif.css"

export default function FavoritesNotif(props) {
    return (
        <div class="favorites-notif">
            Number of favorites: {props.nrFavorites}
        </div>
    )
}