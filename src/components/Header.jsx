import chef from "../assets/chef.png"
export default function Header(){
    return(
        <header>
            <img src={chef} alt="Chef icon"></img>
            <span>What's left, Chef?</span>
        </header>    
    )
}