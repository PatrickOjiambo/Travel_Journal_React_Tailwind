import { useState, useId } from "react"
//Put state in an object
function Tags() {
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [agree, setAgree] = useState(false)
    const agreeLabel = useId;
    const emailLabel = useId();
    const nameLabel = useId();
    return (<div className="mt-4">
        <div>
            <p className="font-bold text-lg py-2">Follow Me</p>
            <div className="flex shadow-lg">
                <div>
                    <img src="../images/facebook.png" alt="facebook.png" className="" />
                </div>
                <div className="">
                    <img src="../images/twitter.png" alt="twitter logo" className="" />
                </div>
                <div className="">
                    <img src="../images/instagram.png" alt="instagram logo" className="" />
                </div>
                <div className="">
                    <img src="../images/youtube.png" alt="youtube logo" className="" />
                </div>
            </div>
        </div>
        <div className="bg-funnyOrange rounded-xl">
            <h2 className="font-semibold text-lg capitalize mt-4 text-white">Subscribe today</h2>
            <p className="text-base text-white py-3">Lorem ipsum dolor sit am consectetur adipisc ing elit. In sed et donec purus viverra. Sit justo</p>
            <label htmlFor={emailLabel}></label>
            <input
                id={emailLabel}
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="capitalize text-sm text-specialgrey rounded-lg"
            />

            <label htmlFor={nameLabel}></label>
            <input
                id={nameLabel}
                placeholder="Your name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="capitalize text-sm text-specialgrey rounded-lg"
            />
            <label htmlFor={agreeLabel}></label>
            <input
                name="You agree to our company privacy policy"
                type="checkbox"
                id={agreeLabel}
                checked={agree}
                onChange={e => setAgree(!e.target.value)}
            />
            <button className="text-funnyOrange bg-white rounded-md">SUBSCRIBE</button>
        </div>
    </div>);
}

export default Tags;