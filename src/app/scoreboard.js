export default function Main({ content }){
    // Source - https://stackoverflow.com/a/979289
    // Posted by Stobor, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-04-17, License - CC BY-SA 4.0
    content.scores.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    var scoreboard = content.scores;

    var people = scoreboard.map(func => 
        <Competitor name={func.name} pic={func.picture} points={func.points} key={func.id} />
    )

    function Competitor({ name, pic, points = null }){
        if(points == null){
            var currentPoints = content.defaultpoints
        } else{
            var currentPoints = points
        }
        return (<div className="place-content-center place-items-center">
            <img src={pic} />
            <p>{name}</p>
            <span className="w-[96px] h-[4px] bg-[var(--dark)] block" />
            <meter className="-rotate-90" value={currentPoints} min={content.minpoints} max={content.maxpoints}></meter>
            <p className="text-xl">{currentPoints}</p>
            <div className="flex">
                <button className="w-[20px]"><p>+</p></button>
                <button className="w-[20px]"><p>-</p></button>
            </div>
            <span className="w-[96px] h-[4px] bg-[var(--dark)] block" />
        </div>);
    }

    return (<>
        <h1>{content.title}</h1>
        <div className="flex">{people}</div>
    </>);
}