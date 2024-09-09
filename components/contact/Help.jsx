import { site_url } from "../../data/names";
import SingleBox from "../common/SingleBox";
import need_help_1 from "/public/images/icon/need-help-1.png";
import need_help_2 from "/public/images/icon/need-help-2.png";
import need_help_3 from "/public/images/icon/need-help-3.png";

const help_data = [
  {
    id: 1,
    icon: need_help_1,
    title: "Sales",
    desc: `sales@${site_url}`,
  },
  {
    id: 2,
    icon: need_help_2,
    title: "Help & Support",
    desc: `supports@${site_url}`,
  },
  {
    id: 3,
    icon: need_help_3,
    title: "Media & Press",
    desc: `media@${site_url}`,
  },
];

const Help = () => {
  return (
    <section className="account-feature loan-feature need-more-help">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  You can reach out to us for all your
                </h5>
                <h2 className="title">Need More Help?</h2>
                <p>
                  Queries, complaints and feedback. We will be happy to serve
                  you
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {help_data.map((singleData) => (
              <div key={singleData.id} className="col-md-4">
                <SingleBox
                  icon={singleData.icon}
                  title={singleData.title}
                  desc={singleData.desc}
                />
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1395634689075!2d-73.98596092462729!3d40.7589550347408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855f36165fd%3A0x88bf146d6da586dc!2s145%20W%2047th%20St%20%233b%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sng!4v1724722684502!5m2!1sen!2sng" style={{border:0,width:"100%",height:"512px"}} allowfullscreen="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
