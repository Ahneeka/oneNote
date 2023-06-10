

interface IProps {
  title: string;
  description: string;
}

function NoteTopic(props: IProps) {
  return (
    <div>
        <div className="topic">
            <h2 ><img src="/images/Ellipse 3.png" alt=" " /> {props.title}</h2>
            <p>{props.description}</p>
            <p className="pic">4/6/2023 </p>
            <p className="ellip"><img src="/images/vector-10.png" alt="" /> 10/6/2023</p>
        </div>
    </div>
  )
}

export default NoteTopic;