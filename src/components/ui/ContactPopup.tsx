import React from 'react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          width: '600px',
          maxWidth: '90%',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
        
        <div id="mc_embed_shell">
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
            rel="stylesheet"
            type="text/css"
          />
          <style
            type="text/css"
          >
            {`
              #mc_embed_signup { background: #fff; clear: left; font: 14px Helvetica, Arial, sans-serif; width: 600px; }
            `}
          </style>
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us12.list-manage.com/subscribe/post?u=cea9354991db7b3320aa1d708&amp;id=3213a11e98&amp;f_id=00b8e6e0f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">
                    First Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    className="required text"
                    id="mce-FNAME"
                    required
                    defaultValue=""
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">
                    Last Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="LNAME"
                    className="required text"
                    id="mce-LNAME"
                    required
                    defaultValue=""
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                    defaultValue=""
                  />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: 'none' }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: 'none' }}
                  ></div>
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-5000px' }}
                >
                  <input
                    type="text"
                    name="b_cea9354991db7b3320aa1d708_3213a11e98"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      value="Subscribe"
                    />
                    <p style={{ margin: '0px auto' }}>
                      <a
                        href="http://eepurl.com/i2L9A-"
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: 'transparent',
                            borderRadius: '4px',
                          }}
                        >
                          <img
                            className="refferal_badge"
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                            alt="Intuit Mailchimp"
                            style={{
                              width: '220px',
                              height: '40px',
                              display: 'flex',
                              padding: '2px 0px',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
