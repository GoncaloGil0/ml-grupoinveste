import { HiMenu } from "react-icons/hi";
import { useState } from 'react'
import './navBar.css'
import { globalVar } from '../../data/consts'
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t } = useTranslation();
  const [state, setState] = useState<boolean>(false)
  const [scrool, setScrool] = useState<boolean>(false)

  function handleScroll() {
    if (window.scrollY > (window.innerHeight / 5)) {
      setScrool(true)
    } else {
      setScrool(false)
    }
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <nav className={`navBar ${state ? "active" : null} ${scrool ? "scrolled" : null}`} onMouseEnter={() => { setState(true) }} onMouseLeave={() => { setState(false) }} >
      <div>
        <a href="/">
          <svg viewBox="0 0 1337 166" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M788.974 2H767.675V131.922H788.974V2Z" />
            <path d="M466.058 91.7812C466.058 94.4624 465.533 97.1839 464.402 99.986C463.312 102.607 461.697 105.046 459.536 107.284C457.578 109.34 455.134 111.074 452.166 112.424C449.359 113.715 446.23 114.38 442.716 114.38C439.587 114.38 436.679 113.835 433.953 112.767C431.308 111.537 429.006 109.965 427.047 108.03C425.069 105.933 423.534 103.595 422.423 100.954C421.333 98.212 420.768 95.309 420.768 92.1642V35.0127H400.273V91.7812C400.273 97.2847 401.222 102.546 403.14 107.526V107.586L403.181 107.626C405.22 112.545 408.006 116.94 411.54 120.75L411.601 120.811L411.661 120.871C415.376 124.56 419.718 127.483 424.685 129.66C429.773 131.898 435.286 132.987 441.121 132.987C448.188 132.987 454.67 131.293 460.425 127.846C462.444 126.657 464.322 125.367 466.038 123.935V132.402H486.533V35.0329H466.038V91.8013L466.058 91.7812Z" />
            <path d="M690.991 48.5277C686.648 44.0323 681.602 40.4887 675.851 37.8968C670.121 35.2442 663.969 33.9482 657.455 33.9482C650.94 33.9482 644.728 35.2644 638.877 37.8968C633.106 40.4887 628.04 44.0526 623.717 48.5479H623.697L623.677 48.6087C619.475 53.104 616.177 58.3891 613.744 64.3828C611.271 70.3563 610.065 76.7146 610.065 83.4576C610.065 90.2006 611.291 96.6398 613.744 102.715V102.755C616.177 108.627 619.475 113.831 623.677 118.327H623.697L623.717 118.388C628.06 122.883 633.126 126.426 638.877 129.039C644.728 131.671 650.92 132.987 657.455 132.987C663.989 132.987 670.121 131.671 675.851 129.039C681.602 126.447 686.668 122.883 690.991 118.408C695.334 113.912 698.732 108.688 701.165 102.796V102.755C703.618 96.6804 704.844 90.2411 704.844 83.4981C704.844 76.7551 703.638 70.3969 701.165 64.4233C698.732 58.3891 695.334 53.104 690.991 48.5884V48.5277ZM682.386 95.4451V95.5059L682.346 95.5666C680.958 99.2925 679.008 102.492 676.515 105.226C674.002 107.979 671.086 110.146 667.769 111.746C664.572 113.305 661.134 114.074 657.434 114.074C653.735 114.074 650.317 113.285 647.1 111.746C643.803 110.146 640.907 108 638.394 105.246C636.002 102.492 634.031 99.2722 632.503 95.5059C631.136 91.8408 630.432 87.8315 630.432 83.4576C630.432 79.0838 631.136 75.0744 632.503 71.4093C634.031 67.643 636.002 64.4031 638.394 61.6694C640.907 58.9358 643.803 56.7691 647.1 55.1897C650.297 53.6305 653.735 52.861 657.434 52.861C661.134 52.861 664.552 53.6507 667.769 55.1897H667.829L667.889 55.2504C671.127 56.7084 673.901 58.7535 676.254 61.4467L676.294 61.4872L676.334 61.5277C678.827 64.2613 680.858 67.5417 682.386 71.4498V71.4903C683.874 75.1554 684.638 79.1242 684.638 83.4778C684.638 87.8314 683.874 91.8205 682.386 95.4654V95.4451Z" />
            <path d="M1333.42 66.4008C1331.26 59.9589 1328 54.2868 1323.62 49.4655C1319.37 44.6645 1314.26 40.8763 1308.32 38.1213C1302.39 35.3257 1295.92 33.9482 1288.99 33.9482C1282.44 33.9482 1276.2 35.265 1270.31 37.8985C1264.65 40.4914 1259.64 44.0567 1255.3 48.5336H1255.28L1255.26 48.5944C1251.03 53.0916 1247.72 58.3788 1245.27 64.375C1242.78 70.351 1241.57 76.7119 1241.57 83.4576C1241.57 90.2034 1242.8 96.6453 1245.27 102.723V102.763C1247.72 108.638 1251.03 113.844 1255.26 118.341C1259.48 122.858 1264.45 126.424 1270.11 129.037H1270.13C1276.01 131.671 1282.32 132.987 1289.01 132.987C1298.9 132.987 1307.75 130.212 1315.43 124.621C1322.95 119.131 1328.61 112.041 1332.35 103.431L1334.69 98.0025L1313.89 95.5514L1312.56 98.4887C1310.38 103.31 1307.2 107.098 1303 109.914C1298.86 112.709 1294.23 114.107 1288.99 114.107C1285.35 114.107 1282 113.439 1278.88 112.122C1275.71 110.643 1272.96 108.678 1270.6 106.207C1268.29 103.675 1266.37 100.737 1264.86 97.3138C1263.99 95.369 1263.32 93.3433 1262.88 91.2365H1336.01L1336.25 87.1039C1336.67 79.8518 1335.76 72.944 1333.44 66.421L1333.42 66.4008ZM1263.24 74.7064C1263.68 72.5996 1264.35 70.5738 1265.22 68.6291C1266.76 65.2258 1268.68 62.3493 1270.94 59.9792C1273.33 57.4875 1276.03 55.5833 1279.07 54.226H1279.11L1279.15 54.1855C1282.26 52.7472 1285.53 52.0179 1288.99 52.0179C1292.45 52.0179 1295.52 52.6864 1298.51 54.0032C1301.56 55.3604 1304.19 57.2039 1306.44 59.5537L1306.48 59.5943L1306.52 59.6348C1308.88 62.0049 1310.84 64.841 1312.36 68.224V68.2847L1312.42 68.3455C1313.37 70.3307 1314.14 72.4375 1314.7 74.7064H1263.28H1263.24Z" />
            <path d="M973.061 35.0127L947.117 102.588L921.354 35.0127H899.728L937.418 131.922H956.816L994.507 35.0127H973.081H973.061Z" />
            <path d="M885.973 46.326C882.343 42.4958 877.999 39.4719 872.982 37.2947C867.945 35.0368 862.357 33.9482 856.362 33.9482C849.204 33.9482 842.616 35.6416 836.682 39.0888C834.643 40.2782 832.746 41.5886 830.972 43.0401V34.5328H810.272V131.902H830.972V75.1336C830.972 72.4525 831.522 69.8116 832.624 67.1707V67.1102C833.745 64.3686 835.336 61.9898 837.437 59.9134L837.477 59.8731L837.518 59.8327C839.659 57.6152 842.188 55.8412 845.166 54.4905C848 53.2003 851.161 52.5351 854.71 52.5351C857.85 52.5351 860.685 53.1398 863.275 54.3091L863.336 54.3494H863.418C866.048 55.4582 868.333 57.0104 870.311 59.0667L870.351 59.107L870.392 59.1473C872.35 61.0625 873.88 63.3807 875.022 66.1426L875.062 66.2434L875.103 66.3442C876.286 68.8842 876.898 71.6864 876.898 74.7707V131.922H897.597V75.1538C897.597 69.6301 896.557 64.3484 894.477 59.3691C892.54 54.3897 889.684 50.0353 885.952 46.326H885.973Z" />
            <path d="M1229.18 112.237C1229.14 112.237 1228.96 112.297 1228.56 112.338C1228.1 112.378 1227.46 112.418 1226.64 112.418C1222.47 112.418 1219.01 111.112 1216.04 108.481C1213.36 105.87 1211.94 102.495 1211.94 97.9356V52.8419H1236.89V34.9049H1211.94V13.7139H1191.6V34.9049H1179.81V52.8419H1191.6V98.1365C1191.6 102.957 1192.4 107.477 1194.07 111.695V111.755L1194.13 111.815C1195.91 115.953 1198.29 119.569 1201.34 122.602L1201.38 122.642L1201.42 122.682C1204.48 125.594 1208.13 127.844 1212.28 129.471C1216.5 131.138 1221.05 131.922 1225.88 131.922C1227.7 131.922 1229.46 131.761 1231.19 131.46C1232.55 131.219 1233.79 130.958 1234.53 130.716L1238.38 129.431L1233.69 110.751L1229.22 112.237H1229.18Z" />
            <path d="M223.491 49.0294C225.685 43.3361 228.643 38.5249 232.306 34.5357H232.326L232.346 34.4956C236.049 30.366 240.295 27.1986 245.125 24.9935H245.145L245.165 24.9734C250.115 22.648 255.267 21.4853 260.66 21.4853C267.563 21.4853 274.224 23.3897 280.684 27.3189C286.983 31.1277 292.115 36.8611 296.019 44.7193L298.112 48.9491L316.143 38.2844L314.05 34.5958C310.85 28.9226 307.107 24.0112 302.821 19.9016C298.756 15.8723 294.389 12.5044 289.68 9.83823C285.011 7.17203 280.161 5.18743 275.15 3.90445C270.219 2.64152 265.37 2 260.62 2C252.349 2 244.44 3.70398 236.894 7.09186C229.549 10.4597 223.048 15.0905 217.394 20.9441C211.718 26.7175 207.211 33.5734 203.87 41.4718V41.5119C200.61 49.3902 199 57.9301 199 67.0513C199 76.1725 200.61 84.572 203.87 92.5706V92.6107L203.91 92.6508C207.251 100.389 211.678 107.225 217.172 113.098L217.212 113.138L217.253 113.178C222.908 118.932 229.488 123.482 236.954 126.83C244.501 130.218 252.43 131.922 260.681 131.922C266.235 131.922 271.668 131.14 276.941 129.597H276.981L277.021 129.577C282.354 127.913 287.305 125.668 291.853 122.841C296.522 119.894 300.748 116.386 304.551 112.337C308.355 108.287 311.615 103.797 314.291 98.9053L314.815 97.923V57.4088H249.954V76.2927H293.604V92.2298C290.303 98.4242 285.796 103.275 280.06 106.824C274.023 110.572 267.583 112.417 260.66 112.417C255.247 112.417 250.095 111.314 245.145 109.109C240.275 106.744 235.988 103.556 232.306 99.5468C228.623 95.5375 225.665 90.7864 223.471 85.2335C221.318 79.6405 220.211 73.5664 220.211 67.0312C220.211 60.496 221.318 54.482 223.471 49.0294H223.491Z" />
            <path d="M1163.76 42.0715C1160.14 39.519 1155.91 37.5338 1151.18 36.1158C1146.35 34.6572 1141.15 33.9482 1135.61 33.9482C1130.07 33.9482 1125.26 34.6572 1120.45 36.1158C1115.81 37.5541 1111.61 39.6001 1107.89 42.2741C1104.27 44.8265 1101.34 47.9057 1099.13 51.4913C1096.87 55.2186 1095.72 59.3106 1095.72 63.666C1095.72 67.596 1096.71 71.3841 1098.59 75.0102V75.0508L1098.63 75.0913C1100.57 78.6363 1103.34 81.6749 1106.82 84.2476C1110.34 86.8406 1114.52 88.8258 1119.27 90.2641C1124.25 91.7227 1129.71 92.4317 1135.61 92.4317C1141.86 92.4317 1146.53 93.8092 1149.97 96.1996C1153.44 98.6103 1154.62 101.082 1154.62 103.675C1154.62 104.89 1154.29 106.146 1153.51 107.483C1152.7 108.719 1151.52 109.934 1149.87 111.069C1148.15 112.122 1146.04 113.074 1143.48 113.905C1141.15 114.553 1138.54 114.897 1135.61 114.897C1132.84 114.897 1130.31 114.553 1127.99 113.905C1125.6 113.094 1123.54 112.163 1121.82 111.109C1120.3 109.975 1119.17 108.759 1118.32 107.483C1117.53 106.146 1117.19 104.89 1117.19 103.675V99.2787H1095.68V103.675C1095.68 107.949 1096.85 111.96 1099.09 115.667C1101.28 119.253 1104.23 122.332 1107.85 124.884H1107.89L1107.93 124.925C1111.63 127.437 1115.79 129.402 1120.4 130.82C1125.22 132.278 1130.27 132.987 1135.57 132.987C1140.87 132.987 1146.31 132.278 1151.14 130.82H1151.2L1151.26 130.779C1155.97 129.219 1160.12 127.173 1163.6 124.601H1163.62C1167.19 121.906 1170.09 118.766 1172.13 115.14C1174.33 111.352 1175.51 107.301 1175.51 103.047C1175.51 98.7925 1174.43 95.1057 1172.33 91.5403C1170.27 87.9345 1167.46 84.8959 1163.94 82.4447C1160.4 79.8518 1156.21 77.9475 1151.48 76.6511C1146.65 75.1925 1141.33 74.5038 1135.57 74.5038C1129.5 74.5038 1124.81 73.1465 1121.19 70.7156C1117.78 68.3455 1116.56 65.8336 1116.56 63.0583C1116.56 61.8226 1116.89 60.6679 1117.65 59.493L1117.7 59.4322L1117.74 59.3714C1118.54 58.0344 1119.68 56.8798 1121.25 55.8871L1121.33 55.8466L1121.42 55.7858C1123.09 54.6312 1125.08 53.7196 1127.44 53.0308C1129.93 52.3623 1132.64 51.9977 1135.59 51.9977C1138.54 51.9977 1140.97 52.3421 1143.31 53.0106C1145.68 53.6791 1147.7 54.6109 1149.36 55.7656L1149.44 55.8264L1149.52 55.8669C1151.1 56.8392 1152.23 58.0142 1153.04 59.3512L1153.08 59.4119L1153.12 59.4727C1153.87 60.6477 1154.21 61.8023 1154.21 63.038V67.4339H1175.55V63.038C1175.55 58.8447 1174.49 54.9148 1172.37 51.3292C1170.29 47.6828 1167.4 44.5834 1163.76 42.031V42.0715Z" />
            <path d="M589.396 49.419C585.306 44.9259 580.492 41.42 574.952 38.9618C569.332 36.3223 563.309 35.0127 556.903 35.0127C548.946 35.0127 541.633 37.1484 535.107 41.4401C532.629 43.0722 530.352 44.9057 528.278 46.9408V35.3955H507.831V166H528.278V121.39C530.352 123.425 532.629 125.259 535.107 126.891C541.633 131.183 548.946 133.318 556.903 133.318C563.329 133.318 569.372 132.009 574.992 129.349C580.492 126.75 585.286 123.284 589.375 118.932H589.396L589.416 118.872C593.485 114.399 596.648 109.221 598.944 103.377C601.402 97.3126 602.61 90.865 602.61 84.0548C602.61 77.2445 601.462 70.8774 599.145 64.9537C596.849 59.0904 593.586 53.8921 589.396 49.419ZM579.908 96.2447V96.3052L579.867 96.3656C578.457 100.214 576.503 103.539 573.985 106.38C571.608 109.1 568.788 111.235 565.484 112.807H565.464L565.444 112.827C562.402 114.338 559.058 115.124 555.352 115.124C551.645 115.124 548.22 114.338 544.997 112.807C541.714 111.235 538.813 109.1 536.315 106.38C533.918 103.518 531.944 100.174 530.393 96.3052C529.003 92.4971 528.298 88.4271 528.298 84.0749C528.298 79.3198 529.063 75.1087 530.534 71.361C532.206 67.4723 534.301 64.1679 536.819 61.4479C539.337 58.7076 542.157 56.6323 545.3 55.1816C548.563 53.7309 551.887 53.0257 555.331 53.0257C559.038 53.0257 562.382 53.8115 565.424 55.3226H565.444L565.464 55.3428C568.727 56.9144 571.528 59.0703 573.905 61.8911L573.965 61.9717L574.025 62.0523C576.503 64.7523 578.457 67.976 579.847 71.8043V71.8849L579.908 71.9655C581.378 75.5923 582.164 79.622 582.164 84.095C582.164 88.5681 581.398 92.4769 579.908 96.2649V96.2447ZM585.951 52.1391C585.951 52.1391 586.072 52.2802 586.132 52.3406C586.132 52.3406 586.132 52.3406 586.112 52.3205C586.052 52.26 586.011 52.1996 585.951 52.1391Z" />
            <path d="M1074.56 49.4655C1070.37 44.6645 1065.31 40.8763 1059.44 38.1213C1053.58 35.3257 1047.18 33.9482 1040.33 33.9482C1033.85 33.9482 1027.68 35.265 1021.86 37.8985C1016.27 40.4914 1011.31 44.0567 1007.01 48.5336H1006.99L1006.97 48.5944C1002.79 53.0916 999.517 58.3788 997.099 64.375C994.641 70.351 993.441 76.7119 993.441 83.4576C993.441 90.2034 994.661 96.6453 997.099 102.723V102.763C999.517 108.638 1002.79 113.844 1006.97 118.341C1011.15 122.858 1016.07 126.424 1021.66 129.037H1021.68C1027.5 131.671 1033.73 132.987 1040.35 132.987C1050.12 132.987 1058.88 130.212 1066.47 124.621C1073.91 119.131 1079.5 112.041 1083.2 103.431L1085.52 98.0025L1064.95 95.5514L1063.63 98.4887C1061.47 103.31 1058.32 107.098 1054.18 109.914C1050.08 112.709 1045.5 114.107 1040.35 114.107C1036.75 114.107 1033.43 113.439 1030.36 112.122C1027.22 110.643 1024.5 108.678 1022.16 106.207C1019.88 103.675 1017.98 100.737 1016.47 97.3138C1015.61 95.369 1014.95 93.3433 1014.51 91.2365H1086.82L1087.06 87.1039C1087.48 79.8518 1086.58 72.944 1084.28 66.421C1082.14 59.9589 1078.92 54.307 1074.58 49.4858L1074.56 49.4655ZM1014.89 74.7064C1015.33 72.5996 1015.99 70.5738 1016.85 68.6291C1018.36 65.2258 1020.24 62.3493 1022.5 59.9792C1024.86 57.4875 1027.54 55.5833 1030.54 54.226H1030.58L1030.62 54.1855C1033.69 52.7472 1036.93 52.0179 1040.35 52.0179C1043.77 52.0179 1046.78 52.6864 1049.76 54.0032C1052.78 55.3604 1055.38 57.2039 1057.6 59.5537L1057.64 59.5943L1057.68 59.6348C1060.01 62.0049 1061.95 64.841 1063.45 68.224V68.2847L1063.51 68.3455C1064.45 70.3307 1065.21 72.4375 1065.77 74.7064H1014.93H1014.89Z" />
            <path d="M373.973 36.4573C370.058 37.0392 366.242 38.2229 362.525 39.9284H362.486L362.466 39.9485C358.868 41.674 355.49 44.0214 352.29 46.9106V35.0127H332.117V131.922H352.29V83.4672C352.29 79.1936 353.085 75.2811 354.655 71.6897C356.265 67.9778 358.352 64.9482 360.896 62.5004L360.935 62.4602L360.975 62.4201C363.539 59.8519 366.441 57.986 369.74 56.7621H369.8L369.859 56.722C373.079 55.4178 376.378 54.9964 379.797 55.4378L383.096 55.8592L390.688 37.1395L385.342 36.2366C381.685 35.6146 377.889 35.7149 373.973 36.4373V36.4573Z" />
            <path d="M25.9605 101.146C25.9605 103.808 28.1392 105.974 30.8166 105.974H54.9921C71.3979 105.974 82.8951 95.1433 83.7088 80.2147C83.7613 79.2491 84.5225 78.4922 85.4937 78.4922H107.911C108.908 78.4922 109.748 79.3274 109.722 80.3191C108.908 113.125 85.9925 133.744 55.0184 133.744H4.59361C2.04744 133.744 0 131.708 0 129.176V80.2669C0 79.2752 0.813726 78.4922 1.78495 78.4922H24.1755C25.173 78.4922 25.9605 79.3013 25.9605 80.2669C25.9605 87.2353 25.9605 94.1777 25.9605 101.146Z" />
            <path d="M121.114 32.5976C121.114 29.9355 118.935 27.7693 116.258 27.7693H92.0823C75.6765 27.7693 64.1794 38.6004 63.3656 53.529C63.3131 54.4946 62.5519 55.2515 61.5807 55.2515H39.1638C38.1664 55.2515 37.3264 54.4163 37.3526 53.4246C38.1926 20.6182 61.082 0 92.0823 0H142.507C145.053 0 147.101 2.03572 147.101 4.56732V53.4768C147.101 54.4685 146.287 55.2515 145.316 55.2515H122.925C121.928 55.2515 121.14 54.4424 121.14 53.4768C121.14 46.5083 121.14 39.566 121.14 32.5976H121.114Z" />
          </svg>
        </a>
        {window.innerWidth < 1200 ? <HiMenu onClick={() => { setState(!state) }} /> : null}
      </div>
      <div className='col center'>
        <a className="title" href="/about">{t('navBar.about')}</a>
        <a href="/about#mission">{t('navBar.mission')}</a>
        <a href="/about#goals">{t('navBar.goals')}</a>
        <a href="/about#team">{t('navBar.team')}</a>
      </div>
      <div className='col center'>
        <a className="title" href="/companies">{t('navBar.companies')}</a>
        <a href="/invest2030">Invest2030</a>
        <a href="/rootkey">ROOTKey</a>
        <a href="/safevanguard">Safe Vanguard</a>
        <a href="/blendbyte">Blendbyte</a>
        <a href="/esportzy">Esportzy</a>
      </div>
      <div className='col center'>
        <a className="title" href="/offer">{t('navBar.offer')}</a>
        <a href="/offer#consulting">{t('navBar.offer2')}</a>
        <a href="/offer#cybersecurity">{t('navBar.offer3')}</a>
        <a href="/offer#networking">{t('navBar.offer4')}</a>
        <a href="/offer#marketing">{t('navBar.offer5')}</a>
        <a href="/offer#gaming">{t('navBar.offer1')}</a>
      </div>
      <div className='col contact'>
        <a className="title" >{t('navBar.contacts')}</a>
        <a href={`tel:${globalVar.numeroTlmLisboa}`}>{globalVar.numeroTlmLisboa}</a>
        <a href={globalVar.sedeLisboaMaps}>{globalVar.sedeLisboa}</a>
        <a href={globalVar.sedePortoMaps}>{globalVar.sedePorto}</a>
        <a href={`mailto:${globalVar.email}`}>{globalVar.email}</a>
      </div>
    </nav >
  )
}