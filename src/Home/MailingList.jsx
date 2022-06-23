import React from 'react'

export default function MailingList() {
    return (
        <section className="relative bg-gray-900 flex space-y-10 flex-col items-center pt-8 pb-16">
            <div className="space-y-2 text-center">
                <h2 className="text-gold1 text-2xl md:text-5xl">Join our mailing list</h2>
                <p className="text-sm md:text-xl text-white">
                    Get the latest and important update first,<br />
                    subscribe to our emails
                </p>
            </div>

            <form className="flex flex-col space-y-5">
                <input type="text" className="rounded-lg py-2 md:py-4 px-4 md:px-8 text-center w-72 md:w-96 bg-gray-300 text-gray-700 placeholder:text-gray-700" placeholder='Enter Email address' />
                <button className="font-morrisRoman bg-brown1 text-white text-xl px-4 py-2 rounded-3xl">Subscribe</button>
            </form>

        </section>
    )
}
