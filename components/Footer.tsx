import DownloadOn from './DownloadOn';
import UrMP from './YourMP';

const Footer = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '50vh',
        backgroundSize: '20px 20px',
        backgroundImage:
          'linear-gradient(90deg, #222 1px, transparent 0px), linear-gradient(#222 1px, transparent 0px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '50%',
          height: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            fontSize: '50px',
            fontWeight: 600,
            lineHeight: `100%`,
            width: `50%`,
            color: '#fff',
          }}
        >
          Download Uranus
        </h1>
        <br />
        <h1
          style={{
            fontSize: '50px',
            fontWeight: 600,
            lineHeight: `100%`,
            width: `50%`,
            color: '#fff',
          }}
        >
          from the App Store
        </h1>
        <div
          style={{
            width: '100%',
            height: '90px',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <img
            src="https://youmap.com/wp-content/uploads/uploads/2020/04/rocket.png.webp"
            alt="Rocket"
            style={{
              width: '50px',
              height: 'auto',
              zIndex: '10',
              transform: 'rotate(-45deg)',
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: 'rgb(128, 42, 255)',
            width: '203px',
            height: '70px',
            borderRadius: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '10px',
          }}
        >
          <svg
            height="60px"
            viewBox="0 0 14 44"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
          </svg>

          <p
            style={{
              color: 'white',
              fontWeight: 600,
              fontSize: '18px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <strong
              style={{ color: '#ccc', fontWeight: 400, fontSize: '10px' }}
            >
              Download On
            </strong>
            App Store{' '}
          </p>
        </button>
      </div>
      <div
        style={{
          width: '100%',
          height: '30%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '60%',
            height: '10%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              width: '10%',
              height: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                fill="#C3CDE0"
                d="M19.285 10.85h-3.724v-2.1c0-1.084.089-1.766 1.651-1.766h1.974V3.645c-.96-.099-1.926-.147-2.893-.145-2.866 0-4.957 1.74-4.957 4.934v2.416h-3.17v4.2l3.17-.001V24.5h4.225v-9.453l3.24-.001.484-4.196z"
                fill-rule="nonzero"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                fill="#C3CDE0"
                d="M26.447 7c-.887.397-1.84.663-2.842.785 1.02-.618 1.808-1.592 2.176-2.755-.957.57-2.018.985-3.144 1.207-.902-.967-2.186-1.57-3.61-1.57-2.732 0-4.948 2.23-4.948 4.978 0 .389.044.77.129 1.133-4.112-.207-7.756-2.193-10.196-5.204-.427.737-.67 1.593-.67 2.508 0 1.726.872 3.248 2.201 4.14-.813-.025-1.575-.247-2.242-.621v.063c0 2.41 1.705 4.422 3.968 4.881-.416.115-.85.174-1.303.174-.32 0-.63-.03-.93-.088.629 1.974 2.454 3.418 4.619 3.455-1.69 1.338-3.825 2.13-6.144 2.13-.401 0-.791-.022-1.178-.066 2.187 1.41 4.79 2.233 7.583 2.233 9.1 0 14.076-7.586 14.076-14.16 0-.219-.004-.434-.015-.649C24.945 8.878 25.784 8 26.447 7"
                fill-rule="nonzero"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                fill="#C3CDE0"
                d="M9.137 2.333c-3.752 0-6.804 3.055-6.804 6.808v9.722c0 3.752 3.055 6.804 6.808 6.804h9.722c3.752 0 6.804-3.055 6.804-6.808V9.137c0-3.752-3.055-6.804-6.808-6.804H9.137zm11.669 3.89c.536 0 .972.435.972.971 0 .537-.436.973-.972.973-.537 0-.973-.436-.973-.973 0-.536.436-.972.973-.972zM14 8.166c3.217 0 5.833 2.616 5.833 5.833S17.217 19.833 14 19.833 8.167 17.217 8.167 14 10.783 8.167 14 8.167zm0 1.944c-2.148 0-3.889 1.741-3.889 3.889 0 2.148 1.741 3.889 3.889 3.889 2.148 0 3.889-1.741 3.889-3.889 0-2.148-1.741-3.889-3.889-3.889z"
                fill-rule="nonzero"
              ></path>
            </svg>
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              color: 'white',
              fontSize: '15px',
              gap: '30px',
            }}
          >
            <p>Home</p>
            <p>About</p>
            <p>Features</p>
            <p>Partners</p>
            <p>Ambassadors</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
          <div
            style={{
              width: '30%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '15px',
              gap: '10px',
            }}
          >
            <p style={{ width: 'auto' }}>Terms of Use </p> |
            <p style={{ width: 'auto' }}>Privacy Policy </p> |
            <p style={{ width: 'auto' }}> Media kit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
