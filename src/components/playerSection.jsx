import './playerSection.css'

export const PlayerSection = ({ player }) => {
    return (<section className='playerSection'>
        <h2>{player}</h2>
    </section>)
}