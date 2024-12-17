import {
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      link: "https://github.com/acedev0816",
      icon: <FaGithub size={36}/>,
      iconClass: "",
    },
    // {
    //   link: "",
    //   icon: <FaLinkedinIn />,
    //   iconClass: "text-[#0072b1]",
    // },
  ];

  return (
    <>
      {socialContent.map((item, key) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
