import { AdminUpdates } from "./AdminUpdates"
import { Messages } from "./Messages"
import "./Views.css"

export const LandingPage = () => {

    return <article className="FrontPage">
        <section className="welcomeAndUpdates">
            <div className="FrontPageWelcome">
                <h4 className='messageTitle'>Welcome to iAviary</h4>
                <h5>Your Source for Eggspert Collection Management</h5>
                <br></br>
                <p>iAviary allows any aviculturist to keep track of their collection through a responsive database design. 
                    Add, edit, and remove birds from your collection. 
                    By selecting an individual from you collection, you can  view and update that individuals information, 
                    record daily notes, and add weights which then can be viewed in a graph. <br></br><br></br>
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