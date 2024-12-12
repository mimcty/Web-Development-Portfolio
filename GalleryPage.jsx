import chess from '../assets/chess-project.png'
import crochet from '../assets/crochet.jpg'
import greatWall from '../assets/great-wall.jpg'
import jewelry from '../assets/jewelry-store.jpg'
import photography from '../assets/photography.jpg'
import salmon from '../assets/salmon-dish.jpg'
import singapore from '../assets/singapore.jpg'

function GalleryPage(){
    const images = [chess, crochet, greatWall, jewelry, photography, salmon, singapore]
    return (
        <>
            <h2>My Gallery</h2>
            <p>Here are some things about me!</p>
            <article className="gallery">
            {
                images.map((image) => 
                    <figure>
                        <img src={image} alt="" title="" />
                    </figure>
                    )
                }
            </article>
        </>
    )
}
export default GalleryPage;