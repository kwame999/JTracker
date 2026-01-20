type IconName = keyof typeof icons;

interface IconSetProps {
  iconName: IconName;
  size: number
}

const icons = {
  barleft: (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M5.25 0.875L5.25 14.875M5.25 0.875H12.0748C13.0549 0.875 13.5453 0.875 13.9197 1.06574C14.249 1.23352 14.5165 1.50104 14.6843 1.83032C14.875 2.20467 14.875 2.69508 14.875 3.67517V12.0752C14.875 13.0553 14.875 13.5446 14.6843 13.919C14.5165 14.2483 14.249 14.5167 13.9197 14.6844C13.5457 14.875 13.0559 14.875 12.0777 14.875L5.25 14.875M5.25 0.875H3.67483C2.69474 0.875 2.20538 0.875 1.83103 1.06574C1.50175 1.23352 1.23333 1.50104 1.06555 1.83032C0.875002 2.2043 0.875002 2.69412 0.875002 3.67229L0.875 12.0777C0.875 13.0559 0.875 13.545 1.06555 13.919C1.23333 14.2483 1.50175 14.5167 1.83103 14.6844C2.20501 14.875 2.69412 14.875 3.6723 14.875H5.25" stroke="#15151E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  ),
  sun: (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99984 3.33333V1.66666M9.99984 16.6667V18.3333M5.34502 5.34518L4.1665 4.16666M14.7732 14.7734L15.9517 15.9519M3.33317 10H1.6665M16.6665 10H18.3332M14.7736 5.34518L15.9521 4.16666M5.34542 14.7734L4.16691 15.9519M9.99984 14.1667C7.69865 14.1667 5.83317 12.3012 5.83317 10C5.83317 7.69881 7.69865 5.83333 9.99984 5.83333C12.301 5.83333 14.1665 7.69881 14.1665 10C14.1665 12.3012 12.301 14.1667 9.99984 14.1667Z" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  moon: (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};



const IconSet = ({ iconName, size }: IconSetProps) => {
  return (
    <div style={{width: size, height: size,}}>
      {icons[iconName]}
    </div>
  );
};

export default IconSet