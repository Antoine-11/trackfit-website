
export default function LocationMap({link}) {
    return (
        <section className="w-full py-12">
            <div className="w-full h-[400px] mb-12 rounded-xl overflow-hidden shadow-md">
                <iframe
                    title="Ubicación TrackFit"
                    src={link}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
