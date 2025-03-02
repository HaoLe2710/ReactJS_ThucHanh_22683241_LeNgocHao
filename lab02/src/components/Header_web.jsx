import '../styles/Header.css'

export default function Header_web(){
    return(
        <div className='flex-container'>
            <div className='icon'>
                <img src="../resources/image/Lab_03/avatar_small.png" alt="" />
            </div>
            <div className='search_bar'>
                <img src="../resources/image/Lab_03/search.png" alt="" />
                <input type="text" placeholder='Type to search'/>
            </div>
            <div className='menu_bar'>
                <a href="#">What to cook</a>
                <a href="#">Recipes</a>
                <a href="#">Ingredients</a>
                <a href="#">Occasions</a>
                <a href="#">About us</a>
            </div>
            <div className='recipesbox_account'>
                <div className='recipesbox'>
                    <img src="../resources/image/Lab_03/archive_check.png" alt="" />
                    <p>Your Recipes Box</p>
                </div>
                <div className='avatar'>
                    <img src="../resources/image/Lab_03/avatar.png" alt="" />
                </div>
            </div>
        </div>
    )
}