import "./Views.css"

export const LandingPage = () => {
    return <article className="FrontPage">
        <section className="welcomeAndUpdates">
            <div className="FrontPageWelcome">
                <h4>Welcome to iAviary</h4>
                <h5>Your Source for Eggspert Collection Management</h5>
                <br></br>
                <p>iAviary allows any aviculturist to keep track of their collection through a responsive database design. Add, edit, and remove birds. You can also record daily notes for any specimen in your collection. Our species database is growing daily, but feel free to reach out with specific requests.</p>
            </div>
            <div className="FrontPageAdminUpdates">
                Admin Updates
            </div>
        </section>
        <section className="FrontPageMessages">
            Messages
        </section>
        <footer className="landingFooter">
            <div>Contact: 555-555-5555 </div>
            <div>Email: iaviary@iaviary.com</div>
            <div>Address: 555 Birds St, Birds SD, 55555</div>
            </footer>
    </article>
}