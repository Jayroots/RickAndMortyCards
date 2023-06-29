
const ContactPage = () => {
    return (
        <form className="flex flex-col p-6 space-y-4" action="">
            <input className="shadow-sm border-bg-violet" type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="Votre message" />

            <button>Submit</button>



        </form>
    );
};

export default ContactPage;