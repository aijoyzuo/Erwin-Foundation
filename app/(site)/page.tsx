import PosterSwiper from "@/components/PosterSwiper";
import CollectionSwiper from "@/components/CollectionSwiper";
import CoinAnimator from "@/components/CoinAnimator";
import LightboxImage from "@/components/LightboxImage";
import ScrollObserverInit from "@/components/ScrollObserverInit";
import { BASE_PATH } from "@/lib/basePath";

export default function Home() {
  return (
    <div className="content">
      <ScrollObserverInit />
      <div className="poster">
        <h2>近期活動</h2>
        <PosterSwiper />
      </div>
      <div></div>
      <div className="about" id="section1">
        <h2>本基金會</h2>
        <h3 className="index-h3">Erwin Foundation</h3>
        <div className="about-a">
          <p className="section-p">
            艾爾文基金會成立於艾爾迪亞建國後一百年，由昔葉卡派支持者募資創立。<br />
            瑪莉亞之牆奪還戰後，領略帕拉迪島情勢而逐漸成形的葉卡派，渴望徹底擺脫外部威脅和內部壓迫，實現帕拉迪島的完全自主，屬於艾爾迪亞建國路上的激進派別。縱然艾爾文‧史密斯的戰略風格與葉卡派中心人物艾連‧葉卡有所出入，其所具備的決策能力與自我犧牲的情操，以及對真相的無畏追求，都與葉卡派支持者產生巨大的共鳴，在艾爾文逝世後，其精神持續領導艾爾迪亞人從被蒙蔽和壓迫的命運中解放，邁向獨立。<br />
            本基金會亦有艾爾迪亞國皇室（前雷斯家族）投入贊助，天與地之戰期間葉卡派雖與保守派立場各異，對於艾爾文之於艾爾迪亞建國歷史的價值則一致認同。本基金會旨在過去、現在、將來，向世界傳達真相與自由的可貴。
          </p>
          <CoinAnimator />
        </div>
      </div>
      <div className="life" id="section2">
        <h2>艾爾文‧史密斯的生平</h2>
        <div className="life-e">
          <div className="life-a scroll-element">
            <h3 className="index-h3">「真相揭露的那一刻，我必須在場。」</h3>
            <p className="section-p">
              艾爾文以帕拉迪島調查兵團第十三任團長之名為後世所知，其父（佚名）作為教師，曾質疑當時牆外不存在人類一說，並推論王政藉竄改歷史對人民進行思想控制，當時年幼的艾爾文不慎將該論述流出，至父親遭到中央的迫害而亡。從此，艾爾文終其一生，都以其行動想證明父親所言為真。
            </p>
            <p className="section-p">
              追尋真相的渴望驅動艾爾文加入調查兵團，憑藉優異的決斷力及戰略佈局，曾為壁外調查生還率最高的分隊長，隨後晉升團長，以其領袖魅力廣納良才。艾爾迪亞人於帕拉迪島建國歷史上諸多名將，包含第十四任團長韓吉‧佐耶、第十五任團長阿爾敏‧亞魯雷特，士官長里維‧阿卡曼及艾爾迪亞王國皇室希斯特莉亞‧雷斯等皆出自其麾下。
            </p>
          </div>
          <div className="life-d"></div>
          <div className="life-b scroll-element">
            <h3>「獻出心臟吧！」</h3>
            <p className="section-p">
              在帕拉迪島牆內政治鬥爭的高峰期，艾爾文遭王政指控率領兵團叛變，並差點在首都的中央廣場（今史密斯廣場）上被公開處決，此事件象徵壓迫性政權對自由思想的打壓，而艾爾文以性命為賭注，成功推翻王政一舉亦顯示出他執著的野心。
            </p>
            <p className="section-p">
              在瑪利亞之牆奪還戰中，艾爾文身先士卒，鼓舞士兵投入棄保作戰，這場戰役成為帕拉迪島解殖過程的重要轉捩點。艾爾文放棄其畢生追求的真相，促成戰役的巨大成功，將他革命家的形象推到了最高點，「獻出心臟吧！」這一句他用以凝聚軍心的口號，在後來則被葉卡派譽為民族自決的號角。
            </p>
          </div>
        </div>
        <div className="life-c scroll-element">
          <h3>艾爾文的一生止步於城牆，卻是<br />引領艾爾迪亞人解殖路上最穩紮的基石。</h3>
        </div>
      </div>
      <div className="square" id="section3">
        <h2>史密斯廣場</h2>
        <h3 className="index-h3">公共空間的政治象徵</h3>
        <div className="square-a">
          <p className="section-p">
            艾爾文在世期間，帕拉迪島上的人民尚不知海的另一端有敵人的存在，廣場作為政府力量展示和控制的重要場域，曾為了處決艾爾文而搭起處刑檯，亦曾為了加冕正統皇室而豎立起高檯。<br /><br />
            天與地之戰後十年，皇室在廣場中央立起艾爾文與其愛駿的雕像，面朝海的方向，象徵帕拉迪島追求知識的靈魂，以及推倒極權，崇尚自由的渴望。該廣場則命名為「史密斯廣場」。
          </p>
          <LightboxImage
            src={`${BASE_PATH}/img/statue/statue2.jpg`}
            alt="Smith Square"
            className="scroll-element"
          />
        </div>
        <div className="square-b">
          <LightboxImage
            src={`${BASE_PATH}/img/statue/statue.1.jpg`}
            alt="Commander Erwin"
            className="scroll-element"
          />
          <p className="section-p">
            艾爾文與攝影科技失之交臂，未能留下影像，工匠係依艾爾文初任分隊長時期僅存的畫像，及昔日戰友描述雕琢而成。<br /><br />
            惟該雕像在政權更迭中曾遭摧毀，加以細節紀錄的缺失，後經決議不做修復，附圖為廣場現況，以及雕像透過AI技術模擬還原的修復畫面。
          </p>
        </div>
      </div>
      <div className="collection" id="section4">
        <h2>文物典藏</h2>
        <CollectionSwiper />
      </div>
      <div className="anecdote" id="section5">
        <h2>團長軼聞</h2>
        <div className="anecdote-a">
          <p className="section-p">
            有關艾爾文‧史密斯的個人情史，並無明確記載。有一說艾爾文於訓練兵時期曾經迷戀酒館員工瑪莉（全名不可考），後因職涯選擇放棄追求。<br /><br />
            另一說艾爾文與其士官長里維‧阿卡曼之間的信賴關係可能超越戰場同袍，兩人經常在會議後私下晤談，也有人暗示，里維前期坐擁人類最強士兵盛名，卻對艾爾文表現出無條件的服從，以及雙方戰略上的絕佳默契，都與其間的浪漫情愫有關。傳言兩人在無數夜裡獨處，在艾爾文的最後一戰前，以及死亡當下，皆是里維士官長陪伴在側。
            <br /><br />後者說法認為艾爾文與里維身為長官，卻共同使用調查兵團宿舍為有利證據，惟當時調查兵團資源與設備缺乏，多名士兵共用宿舍並非罕見之事。據悉在艾爾文逝世後，里維士官長便搬進單人房，將空間騰作議事使用。<br /><br /><br /><br />
            <i className="fa-solid fa-caret-right" />　里維士官長（前排左一）。該照片為天與地之戰前夕，於帕拉迪島境內首次搭建的相館所攝。
          </p>
          <img src={`${BASE_PATH}/img/Fpvp0eDaAAAuGTs.jpg`} alt="" />
        </div>
      </div>
      <div className="founder">
        <p className="section-p">
          ©Erwin Foundation / Founder: zuo<br />For the celebration of October 14th, 2024.
        </p>
      </div>
    </div>
  );
}
