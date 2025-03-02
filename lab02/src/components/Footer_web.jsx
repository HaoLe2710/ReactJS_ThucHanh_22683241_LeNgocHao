import '../styles/footer.css'

export default function Footer_web(){
    return(
        <div className='flex-container'>
            <div className='leftside_flex'>
                <div className='about_us_flex'>
                    <div className='about_us_content'>
                        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                    </div>
                    <div className='email_bar'>
                        <input type="text" name="" id="" placeholder='Enter your email'/>
                        <button>Send</button>
                    </div>
                </div>
                <div className='info'>
                    <div className='icon'>
                        <img src="../resources/image/Lab_03/avatar_small.png" alt="" />
                    </div>
                    <div className='link'>
                        <a href="#">2023 Chef Company</a>
                        <a href="#">Terms of Sevice|Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div className='center_flex'>
                <div className='learn_more'>
                    <h3>Learn More</h3>
                    <a href="#">Our Cooks</a>
                    <a href="#">See Our Features</a>
                    <a href="#">FAQ</a>
                </div>
                <div className='shop'>
                    <h3>Shop</h3>
                    <a href="#">Gift Supcription</a>
                    <a href="#">Send Us Feedback</a>
                </div>
            </div>
            <div className='rightside_flex'>
                <h3>Recipes</h3>
                <a href="#">What to Cook This Week</a>
                <a href="#">Pasta</a>
                <a href="#">Dinner</a>
                <a href="#">Healthy</a>
                <a href="#">Vegetarion</a>
                <a href="#">Vegan</a>
                <a href="#">Christmas</a>
            </div>
        </div>
    )
}