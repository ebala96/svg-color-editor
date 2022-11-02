const SvgColorChanger = ({ fill, stroke }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
      >
        <path d="M19.62 11.43c2.35 0 4.26 1.9 4.37 4.27l.01.21v3.6c0 2.4-1.85 4.37-4.17 4.48l-.21.01H4.38a4.43 4.43 0 0 1-4.37-4.27L0 19.52v-3.6c0-2.4 1.85-4.37 4.17-4.48H19.62zm-1.15 3.64c-.54 0-.98.17-1.33.5-.3.3-.47.68-.5 1.12l-.01.2v2.8c0 .59.15 1.06.46 1.4.32.34.75.51 1.29.51.6 0 1.06-.16 1.36-.48.27-.29.42-.7.45-1.23l.01-.21v-.32h-1.25v.28c0 .37-.04.6-.12.71-.08.11-.22.16-.42.16-.2 0-.33-.06-.41-.19-.07-.1-.1-.28-.12-.52V18.47h2.32V16.9c0-.59-.15-1.04-.45-1.35-.3-.32-.72-.47-1.28-.47zm-9.14.15H8.12v5.2c0 .36.07.64.21.82.14.19.35.28.63.28.23 0 .47-.06.71-.2.2-.1.38-.24.56-.43l.14-.14v.68h1.21v-6.21h-1.2v4.72c-.12.13-.25.24-.39.33a.68.68 0 0 1-.33.13c-.12 0-.2-.03-.25-.1a.44.44 0 0 1-.07-.21V15.22zm4.4-2.2H12.5v8.4h1.22v-.47a1.42 1.42 0 0 0 1.15.56c.37 0 .65-.12.83-.35.17-.2.26-.48.28-.83l.01-.18V16.7c0-.5-.1-.9-.3-1.16-.2-.26-.5-.4-.88-.4-.2 0-.38.05-.57.15-.13.08-.26.18-.39.3l-.13.13v-2.7zm-6.15 0h-4.2v1.22H4.8v7.19h1.37v-7.2h1.41v-1.22zm6.65 3.11c.17 0 .3.05.38.16.07.09.11.2.12.36V19.97c0 .2-.03.35-.1.43-.07.1-.17.14-.32.14a.7.7 0 0 1-.49-.2l-.1-.1v-3.86a.87.87 0 0 1 .26-.19.59.59 0 0 1 .25-.06zm4.19.02c.18 0 .32.06.4.17.07.09.11.23.13.41v.78h-1.07v-.63c0-.26.04-.45.12-.56.09-.11.23-.17.42-.17zM11.85 2.26c.57 0 1.03.17 1.4.5.32.29.5.66.53 1.1v3.71a1.8 1.8 0 0 1-.52 1.38c-.36.33-.85.5-1.47.5-.6 0-1.07-.18-1.43-.52-.32-.3-.5-.7-.53-1.2l-.01-.19V4c0-.53.18-.96.55-1.27.37-.31.86-.47 1.48-.47zm4.41.17v5.25c0 .16.03.28.09.35.05.07.15.1.28.1.1 0 .22-.04.38-.14.15-.1.3-.22.42-.36v-5.2h1.37v6.84h-1.37v-.75c-.25.28-.51.49-.79.63-.27.15-.53.22-.79.22-.32 0-.55-.1-.72-.3-.15-.2-.23-.51-.23-.92V2.43h1.36zM6.1 0l1 3.7h.1L8.13 0h1.57L7.9 5.43v3.84H6.39V5.6L4.55 0H6.1zm5.69 3.45a.6.6 0 0 0-.4.13.46.46 0 0 0-.16.28v3.81c0 .19.04.33.14.44.1.1.24.15.42.15a.6.6 0 0 0 .44-.16c.09-.08.14-.19.16-.32V3.95a.45.45 0 0 0-.16-.37.67.67 0 0 0-.44-.13z" />
      </svg>
    </div>
  );
};

export default SvgColorChanger;
