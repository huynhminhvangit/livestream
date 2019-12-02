
export default class Marquee extends React.Component {
  constructor(props) {
    super(props)
  }
  MarqueeStop() {
    document.getElementById('my_marquee').stop()
  }
  MarqueeStart() {
    document.getElementById('my_marquee').start()
  }
  HiddenMarquee() {
    $('.div_marquee').slideUp(300)
  }
  render() {
    const { marquees } = this.props;
    const marqueeItem = marquees.map((item, index) => (
      <span key={index} className="pr-5">
        <div
          className="spinner-grow text-success"
          style={{ width: '1rem', height: '1rem' }}
          role="status"
        >
        </div>
        <span dangerouslySetInnerHTML={{ __html: item.message }}></span>
      </span>
    ));
    return (
      <div className="container div_marquee">
        <div className="row">
          <div
            className="col-auto text-center my-auto"
            style={{ backgroundColor: '#000', borderLeft: '2px solid #8cba3f', color: '#fff', padding: '0.3rem 0.7rem' }}
          >
            <h5 className="m-0">THÔNG BÁO</h5>
          </div>
          <div className="col p-0 position-relative">
            <div className="bg-dark text-white position-absolute">
              <marquee
                id="my_marquee"
                behavior="scroll"
                direction="left"
                onMouseOver={() => this.MarqueeStop()}
                onMouseOut={() => this.MarqueeStart()}
              >
                <div className="pt-1">
                  {marqueeItem}
                </div>
              </marquee>
            </div>
            <div className="position-absolute text-white" style={{ zIndex: 100, right: 0 }}>
              <button onClick={() => this.HiddenMarquee()} className="btn btn-sm btn-secondary" style={{ borderRadius: 0, padding: '0.35rem 0.6rem' }}><i className="fa fa-times-circle"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}