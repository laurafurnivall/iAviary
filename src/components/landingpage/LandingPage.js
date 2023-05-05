import { AdminUpdates } from "./AdminUpdates"
import { Messages } from "./Messages"
import "./Views.css"

export const LandingPage = () => {

    return <article className="FrontPage">
        <section className="welcomeAndUpdates">
            <div className="FrontPageWelcome">
                <h3 className='messageTitle'>Welcome to iAviary</h3>
                <h4>Your source for Eggspert Collection Management</h4>
                <br></br>
                <p>iAviary allows any aviculturist to keep track of their collection through a responsive design. 
                    Add, edit, and remove birds from your collection. 
                    Select any individual from you collection to view or edit that individual's information, 
                    record daily notes, and add weights. <br></br><br></br>
                    Our species database is growing daily, but feel free to reach out with specific requests.</p>
            </div>
            <div className="FrontPageAdminUpdates">
                <AdminUpdates/>
            </div>
        </section>
        <section className="FrontPageMessages">
            <Messages/>
        </section>
    </article>
}