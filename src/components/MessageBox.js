const MessageBox = (props) => {
  return (
    <div className={`message-row ${props.side}`}>
      <div className="message-box">
        <div className="body">
          {props.message._source.text}
        </div>

        <div className="footer">
          {props.message._source.timestamp}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
