import svgPaths from "./svg-vlyg9s35jn";
import imgImage from "./2d1209095b788622fd8e31e1804f7538b277095c.png";
import imgImage1 from "./6b92c65e015b7e68258bc5d9fc141a5d4cf24dc1.png";
import imgImage2 from "./e844cb2afa940ff438e5fd0463149cf8bf5beefa.png";
import imgImage3 from "./6a47fd51f663d49263809277fe198a733b93ec74.png";
import imgImage4 from "./bbd42e45a3563a78c688650643cfa87881e8314c.png";
import imgImage5 from "./b8f301307ff66a1945c39042d97cb0980c9bccb7.png";
import imgImage6 from "./5fb3488ac895a1f444edfbcb4d03dc3b7a245f56.png";
import imgImage7 from "./9256347d9ed3fe9bddc2952ca1d3571bca377500.png";
import imgImage8 from "./3e59a99ba66285a28c9952e822a7184a2b0919dc.png";
import imgImage9 from "./fa85768d7c39c9063dff438332010ff5fdfce0f7.png";
import imgImage10 from "./17a64183b534a3247167b75bf64952ae51e631a2.png";

function Image() {
  return (
    <div className="h-[760px] opacity-80 relative shrink-0 w-[1549px]" data-name="Image (서류 검토 자문)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container2() {
  return <div className="absolute h-[760px] left-0 top-0 w-[1549px]" style={{ backgroundImage: "linear-gradient(118.63995784052993deg, rgba(27, 59, 43, 0.86) 7.735%, rgba(27, 59, 43, 0.55) 54.226%, rgba(27, 59, 43, 0.22) 92.265%)" }} data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Container">
      <Image />
      <Container2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20.636px] relative shrink-0 text-[13px] text-white tracking-[0.6253px] whitespace-nowrap">서류 검토 자문</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex h-[34px] items-center justify-center px-[16.259px] py-[6.253px] relative rounded-[24px] shrink-0 w-[120px]" data-name="Container">
      <Text />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col h-[55px] items-start pb-[21.425px] relative shrink-0 w-[120px]" data-name="Container:margin">
      <Container4 />
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 1:margin">
      <div className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[55px] text-white tracking-[-1px] w-[1136px]">
        <p className="leading-[64.8px] mb-0">계약서부터 취업규칙까지</p>
        <p className="leading-[64.8px]">전문가가 꼼꼼히 검토합니다</p>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[36px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[33.068px] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.85)] w-[562px]">사업 운영에 필요한 모든 서류, 리스크 없이 안전하게 검토받으세요</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4.26px_8.521px_rgba(0,0,0,0.2)] flex flex-col h-[60px] items-center justify-center px-[34.083px] py-[17.042px] relative rounded-[24px] shrink-0 w-[170px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[25.563px] relative shrink-0 text-[#1b3b2b] text-[17.042px] text-center whitespace-nowrap">서류 검토 신청</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[4.26px] bg-[rgba(255,255,255,0.15)] border-[1.065px] border-[rgba(255,255,255,0.4)] border-solid content-stretch flex flex-col h-[61px] items-center justify-center px-[29.823px] py-[17.042px] relative rounded-[24px] shrink-0 w-[173px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[23.965px] relative shrink-0 text-[15.977px] text-center text-white whitespace-nowrap">서비스 소개 보기</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[61px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[760px] items-start justify-center left-[175px] max-w-[1200px] px-[32px] top-0 w-[1200px]" data-name="Container">
      <ContainerMargin />
      <Heading1Margin />
      <ParagraphMargin />
      <Container5 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex items-center justify-center left-[20px] rounded-[24px] size-[48px] top-[356px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[33px] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap">‹</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex items-center justify-center left-[1481px] rounded-[24px] size-[48px] top-[356px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[33px] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap">›</p>
    </div>
  );
}

function Button4() {
  return <div className="bg-[rgba(255,255,255,0.45)] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button5() {
  return <div className="bg-[rgba(255,255,255,0.45)] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button6() {
  return <div className="bg-white h-[8px] relative rounded-[4px] shrink-0 w-[28px]" data-name="Button" />;
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[745px] top-[728px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function HeroSlider() {
  return (
    <div className="h-[760px] max-h-[760px] min-h-[480px] overflow-clip relative shrink-0 w-full" data-name="HeroSlider">
      <Container1 />
      <Container3 />
      <Button2 />
      <Button3 />
      <Container6 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[35.2px] relative shrink-0 text-[25px] text-[rgba(255,255,255,0.8)] text-center tracking-[-0.3px] whitespace-nowrap">전국 소상공인과 자영업자가 우림을 선택하는 이유</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[72px] relative shrink-0 text-[48px] text-center text-white tracking-[-1px] whitespace-nowrap">14,200+</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center pt-[8px] relative shrink-0 w-[282px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">등록 사업자</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[72px] relative shrink-0 text-[48px] text-center text-white tracking-[-1px] whitespace-nowrap">98.3%</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center pt-[8px] relative shrink-0 w-[282px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">상담 만족도</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[72px] relative shrink-0 text-[48px] text-center text-white tracking-[-1px] whitespace-nowrap">780+</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center pt-[8px] relative shrink-0 w-[282px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">전문가 파트너</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[72px] relative shrink-0 text-[48px] text-center text-white tracking-[-1px] whitespace-nowrap">2시간↓</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center pt-[8px] relative shrink-0 w-[282px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">평균 초기 응답</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[____282px_282px_282px_282px] grid-rows-[_99.50px] h-[100px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container12 />
      <Container15 />
      <Container18 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[156px] items-start pt-[56px] relative shrink-0 w-full" data-name="Container:margin">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-start max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
      <Paragraph />
      <ContainerMargin2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container7 />
    </div>
  );
}

function OverviewBanner() {
  return (
    <div className="bg-[#1b3b2b] content-stretch flex flex-col h-[336px] items-start px-[24px] py-[72px] relative shrink-0 w-full" data-name="OverviewBanner">
      <ContainerMargin1 />
    </div>
  );
}

function SectionBadge() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e8f0eb] h-[38px] left-1/2 rounded-[24px] top-0 w-[169px]" data-name="SectionBadge">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[0px] left-[21px] right-[19px] text-[#1b3b2b] text-[16px] text-center top-[19px] tracking-[0.5px] whitespace-nowrap">1:1 맞춤 상담 신청</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <SectionBadge />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#111827] text-[0px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[40px] mb-0 text-[40px]">전문가 상담을 신청해보세요</p>
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[40px] text-[#6b7280] text-[20px]">신청 후 24시간 이내 담당 전문가가 직접 연락드립니다</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Heading />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#374151] text-[0px] whitespace-nowrap">
        <span className="leading-[19.5px] text-[15px]">{`성함 `}</span>
        <span className="leading-[19.5px] text-[#d97706] text-[15px]">*</span>
      </p>
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[11px] relative shrink-0 w-full" data-name="Label:margin">
      <Label />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[51px] items-start justify-center overflow-clip px-[15px] py-[13px] relative rounded-[14px] shrink-0 w-[502px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-[rgba(17,24,39,0.5)] w-full">홍길동</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelMargin />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#374151] text-[0px] whitespace-nowrap">
        <span className="leading-[19.5px] text-[15px]">{`연락처 `}</span>
        <span className="leading-[19.5px] text-[#d97706] text-[15px]">*</span>
      </p>
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full" data-name="Label:margin">
      <Label1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[51px] items-start justify-center overflow-clip px-[15px] py-[13px] relative rounded-[14px] shrink-0 w-[502px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-[rgba(17,24,39,0.5)] w-full">010-0000-0000</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelMargin1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#374151] text-[15px] whitespace-nowrap">추가 문의 내용</p>
    </div>
  );
}

function LabelMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full" data-name="Label:margin">
      <Label2 />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[140px] items-start left-0 overflow-clip px-[15px] py-[13px] rounded-[14px] top-0 w-[502px]" data-name="Text Area">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[15px] text-[rgba(17,24,39,0.5)] w-full">문의하실 내용을 자유롭게 적어주세요.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[145px] relative shrink-0 w-full" data-name="Container">
      <TextArea />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[170px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelMargin2 />
      <Container30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="border-[#e5e7eb] border-r border-solid col-1 content-stretch flex flex-col gap-[18px] items-start justify-self-stretch p-[48px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#374151] text-[0px] whitespace-nowrap">
        <span className="leading-[19.5px] text-[15px]">{`업종 선택 `}</span>
        <span className="leading-[19.5px] text-[#d97706] text-[15px]">*</span>
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">▼</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex h-[51px] items-center justify-between px-[15px] py-[13px] relative rounded-[14px] shrink-0 w-[503px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#9ca3af] text-[15px] whitespace-nowrap">업종을 선택해주세요</p>
      <Text1 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start pt-[7px] relative shrink-0 w-full" data-name="Container:margin">
      <Button7 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <ContainerMargin5 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#374151] text-[0px] whitespace-nowrap">
        <span className="leading-[19.5px] text-[15px]">{`상담 분야 `}</span>
        <span className="leading-[19.5px] text-[#d97706] text-[15px]">*</span>
      </p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-[161_0_0] flex-col h-full items-center justify-center min-w-px py-[11px] relative rounded-[14px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap">법률</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-[161_0_0] flex-col h-full items-center justify-center min-w-px py-[11px] relative rounded-[14px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap">노무</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-[161_0_0] flex-col h-full items-center justify-center min-w-px py-[11px] relative rounded-[14px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap">세무</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[10px] h-[57px] items-start pt-[10px] relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Container34 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#111827] text-[20px] whitespace-nowrap">⚡</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#374151] text-[15px] whitespace-nowrap">24시 긴급상담 추가</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">2시간 내 전화 연결 +40,000원</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[375.531_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-white left-[3px] rounded-[9px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] size-[18px] top-[3px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="bg-[#d1d5db] h-[24px] relative rounded-[12px] shrink-0 w-[44px]" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#fafafa] border border-[#e5e7eb] border-solid content-stretch flex gap-[12px] items-center p-[15px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Text2 />
      <Container36 />
      <Container39 />
    </div>
  );
}

function Container31() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[22px] items-start justify-self-stretch p-[48px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container32 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container25() {
  return (
    <div className="grid grid-cols-[__599px_599px] grid-rows-[_457.50px] h-[458px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container31 />
    </div>
  );
}

function Checkbox() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[2px] shrink-0 size-[18px]" data-name="Checkbox" />;
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#374151] text-[0px] whitespace-nowrap">
        <span className="leading-[21px] text-[14px]">개인정보 수집·이용에 동의합니다</span>
        <span className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] text-[#6b7280] text-[14px]">{` (필수)`}</span>
      </p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Label">
      <Checkbox />
      <Text3 />
    </div>
  );
}

function SubmitBtn() {
  return (
    <div className="bg-[#d1d5db] content-stretch flex flex-col items-center justify-center px-[36px] py-[15px] relative rounded-[20px] shrink-0" data-name="SubmitBtn">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#9ca3af] text-[16px] text-center whitespace-nowrap">상담 신청하기 →</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#fafafa] border-[#e5e7eb] border-solid border-t content-stretch flex items-center justify-between px-[48px] py-[22px] relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <SubmitBtn />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col h-[557px] items-start relative shrink-0 w-full" data-name="Form">
      <Container25 />
      <Container41 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[559px] items-start overflow-clip relative rounded-[24px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.07)] shrink-0 w-full" data-name="Container">
      <Form />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[607px] items-start pt-[48px] relative shrink-0 w-full" data-name="Container:margin">
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[738px] items-start max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container22 />
      <ContainerMargin4 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[738px] items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container21 />
    </div>
  );
}

function ConsultationForm() {
  return (
    <div className="bg-[#f9f8f3] content-stretch flex flex-col h-[930px] items-start px-[24px] py-[96px] relative shrink-0 w-full" data-name="ConsultationForm">
      <ContainerMargin3 />
    </div>
  );
}

function SectionBadge1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e8f0eb] h-[38px] left-1/2 rounded-[24px] top-0 w-[169px]" data-name="SectionBadge">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[18px] left-[84.5px] text-[#1b3b2b] text-[16px] text-center top-[10px] tracking-[0.5px] whitespace-nowrap">건별 자문 요금</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <SectionBadge1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#111827] text-[0px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[46.8px] mb-0 text-[40px]">필요한 만큼만, 합리적으로</p>
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[46.8px] text-[#6b7280] text-[20px]">월 구독 없이 건별로 결제하세요. 숨겨진 비용은 없습니다.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Heading1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Basic Online Advisory</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[4px] relative shrink-0 w-[321px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[25.5px] relative shrink-0 text-[#111827] text-[17px] whitespace-nowrap">기본 1:1 온라인 자문</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[321px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="[word-break:break-word] h-[54px] relative shrink-0 w-[321px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[54px] left-0 text-[#1b3b2b] text-[36px] top-0 tracking-[-1px]">₩30,000</p>
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[140px] text-[#6b7280] text-[13px] top-[28px]">~ / 건</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#6b7280] text-[14px] w-[321px]">매장 안에서 해결하는 채팅/통화 단순 1:1 질의응답. 법률·노무·세무 분야 전문가가 빠르게 답변드립니다.</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-[321px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">채팅 또는 통화 선택 가능</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text4 />
      <Text5 />
    </div>
  );
}

function CheckIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon1 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">분야별 인증 전문가 매칭</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text6 />
      <Text7 />
    </div>
  );
}

function CheckIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon2 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">영업시간 내 당일 답변</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <Text9 />
    </div>
  );
}

function CheckIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon3 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">상담 내역 저장</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <Text11 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[321px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1b3b2b] content-stretch flex flex-col items-center justify-center py-[14px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">기본 1:1 온라인 자문 신청하기</p>
    </div>
  );
}

function ButtonAlign() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start justify-end relative shrink-0 w-[321px]" data-name="Button:align">
      <Button11 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid col-1 content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[18px] items-start justify-self-stretch p-[32px] relative rounded-[22px] row-1 self-stretch shrink-0" data-name="Container">
      <Container47 />
      <Container50 />
      <Container51 />
      <List />
      <ButtonAlign />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">24h Emergency Consultation</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[4px] relative shrink-0 w-[321px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[25.5px] relative shrink-0 text-[17px] text-white whitespace-nowrap">24시 긴급상담</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[321px]" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="[word-break:break-word] h-[54px] relative shrink-0 w-[321px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[54px] left-0 text-[36px] text-white top-0 tracking-[-1px]">₩70,000</p>
      <p className="absolute font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[140px] text-[13px] text-[rgba(255,255,255,0.6)] top-[28px]">~ / 건</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-[321px]">당장 내일 해결해야 하는 한시적 고비 대응. 긴급 우선 배정으로 신속하게 연결됩니다.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="border-[rgba(255,255,255,0.15)] border-b border-solid content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-[321px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function CheckIcon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_31)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="white" fillOpacity="0.2" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_31">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon4 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">긴급 우선 배정</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <Text13 />
    </div>
  );
}

function CheckIcon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_31)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="white" fillOpacity="0.2" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_31">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon5 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">24시간 전담 전문가 연결</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text14 />
      <Text15 />
    </div>
  );
}

function CheckIcon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_31)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="white" fillOpacity="0.2" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_31">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon6 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">즉각 대응 전략 수립</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text16 />
      <Text17 />
    </div>
  );
}

function CheckIcon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_31)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="white" fillOpacity="0.2" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_31">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon7 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">사후 요약 정리 제공</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text18 />
      <Text19 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[321px]" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[14px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[#1b3b2b] text-[15px] text-center whitespace-nowrap">24시 긴급상담 신청하기</p>
    </div>
  );
}

function ButtonAlign1() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start justify-end relative shrink-0 w-[321px]" data-name="Button:align">
      <Button12 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-[#d97706] content-stretch flex flex-col items-start left-[154px] px-[15px] py-[5px] rounded-[20px] top-[-13px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[12px] text-white whitespace-nowrap">긴급 대응</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#1b3b2b] border border-[#1b3b2b] border-solid col-2 content-stretch drop-shadow-[0px_8px_16px_rgba(27,59,43,0.25)] flex flex-col gap-[18px] items-start justify-self-stretch p-[32px] relative rounded-[22px] row-1 self-stretch shrink-0" data-name="Container">
      <Container53 />
      <Container56 />
      <Container57 />
      <List1 />
      <ButtonAlign1 />
      <Container58 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">{`Document & Form Review`}</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start pt-[4px] relative shrink-0 w-[321px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[25.5px] relative shrink-0 text-[#111827] text-[17px] whitespace-nowrap">서면/서식 검토 자문</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[321px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[39px] relative shrink-0 w-[321px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[39px] left-0 text-[#1b3b2b] text-[26px] top-0 tracking-[-1px] whitespace-nowrap">별도 안내</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#6b7280] text-[14px] w-[321px]">내용증명, 임대차 계약서, 근로계약서 등 작성 및 검토. 사전 견적 안내 후 진행됩니다.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[7px] relative shrink-0 w-[321px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">* 서류 종류 및 분량에 따라 견적이 다릅니다.</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="border-[#e5e7eb] border-b border-solid content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-[321px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function CheckIcon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon8 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">내용증명·계약서 작성 및 검토</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text20 />
      <Text21 />
    </div>
  );
}

function CheckIcon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon9 />
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">임대차·근로계약서 특화</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text22 />
      <Text23 />
    </div>
  );
}

function CheckIcon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon10 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">법적 리스크 항목 점검</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text24 />
      <Text25 />
    </div>
  );
}

function CheckIcon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_34)" id="CheckIcon">
          <path d={svgPaths.p30769300} fill="#1B3B2B" id="Vector" />
          <path d="M5 8L7 10L11 6" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <CheckIcon11 />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">사전 견적 안내 후 진행</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text26 />
      <Text27 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[321px]" data-name="List">
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#1b3b2b] content-stretch flex flex-col items-center justify-center py-[14px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">견적 문의하기</p>
    </div>
  );
}

function ButtonAlign2() {
  return (
    <div className="content-stretch flex flex-col h-[50px] items-start justify-end relative shrink-0 w-[321px]" data-name="Button:align">
      <Button13 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid col-3 content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[18px] items-start justify-self-stretch p-[32px] relative rounded-[22px] row-1 self-stretch shrink-0" data-name="Container">
      <Container60 />
      <Container63 />
      <Container64 />
      <List2 />
      <ButtonAlign2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-[___386.66px_386.67px_386.66px] grid-rows-[_470.78px] h-[471px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container52 />
      <Container59 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[519px] items-start pt-[48px] relative shrink-0 w-full" data-name="Container:margin">
      <Container45 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center pt-[28px] relative shrink-0 w-[1200px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6b7280] text-[13px] text-center whitespace-nowrap">VAT 포함 금액입니다. 전문가 답변 시작 전까지 전액 환불 가능합니다.</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col h-[698px] items-start max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container43 />
      <ContainerMargin7 />
      <Paragraph5 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[698px] items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container42 />
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-[#f3f7f4] content-stretch flex flex-col h-[890px] items-start px-[24px] py-[96px] relative shrink-0 w-full" data-name="PricingSection">
      <ContainerMargin6 />
    </div>
  );
}

function SectionBadge2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e8f0eb] h-[38px] left-1/2 rounded-[24px] top-0 w-[169px]" data-name="SectionBadge">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[18px] left-[84.5px] text-[#1b3b2b] text-[16px] text-center top-[10px] tracking-[0.5px] whitespace-nowrap">실제 사업자 후기</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <SectionBadge2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[54px] relative shrink-0 text-[#111827] text-[36px] text-center tracking-[-0.8px] whitespace-nowrap">우림으로 문제를 해결한 사업자들</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[102px] items-start max-w-[1200px] px-[20px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container66 />
      <Heading2 />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0 w-full" data-name="Container:margin">
      <Container65 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon />
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Icon4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"직원이 갑자기 부당해고를 주장해서 당황했는데, 노무사 선생님이 2시간 만에 전화로 상황 정리해주셨어요. 실제 사건처럼 대응 방향을 정해주셔서 정말 안심이 됐습니다."`}</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (김정호)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">김정호</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">외식업 · 삼겹살 전문점 운영</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[139px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">서울 마포구</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <Container72 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container70() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image1 />
      <Container71 />
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars />
      <Paragraph6 />
      <Container70 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon5 />
      <Icon6 />
      <Icon7 />
      <Icon8 />
      <Icon9 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"프랜차이즈 계약서 검토를 맡겼는데 독소 조항 세 개를 찾아주셨어요. 법무사분이 실제 협상 문구까지 정리해주셔서 바로 계약 수정 요청할 수 있었습니다."`}</p>
    </div>
  );
}

function Image2() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (박수진)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">박수진</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">뷰티 · 네일샵 2호점 운영</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[124px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">경기 성남시</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[124px]" data-name="Container">
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container75() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image2 />
      <Container76 />
    </div>
  );
}

function ReviewCard1() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars1 />
      <Paragraph7 />
      <Container75 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon10 />
      <Icon11 />
      <Icon12 />
      <Icon13 />
      <Icon14 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"세무조사 예고를 받고 처음엔 막막했어요. 세무사분이 당일 연락 주셔서 준비 서류부터 면담 전략까지 다 잡아주셨습니다. 결국 추징 없이 마무리됐어요."`}</p>
    </div>
  );
}

function Image3() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (이상훈)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">이상훈</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">리테일 · 편의점 3개점 운영</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[135px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">인천 부평구</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[135px]" data-name="Container">
      <Container82 />
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container80() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image3 />
      <Container81 />
    </div>
  );
}

function ReviewCard2() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars2 />
      <Paragraph8 />
      <Container80 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#E5E7EB" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon15 />
      <Icon16 />
      <Icon17 />
      <Icon18 />
      <Icon19 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"강사 계약서를 처음 만들면서 무엇을 넣어야 할지 전혀 몰랐는데, 노무사분이 표준 계약서 템플릿에 저희 상황에 맞는 조항까지 추가해주셨어요."`}</p>
    </div>
  );
}

function Image4() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (최미영)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">최미영</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">서비스업 · 학원 운영</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[103px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">부산 해운대구</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103px]" data-name="Container">
      <Container87 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container85() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image4 />
      <Container86 />
    </div>
  );
}

function ReviewCard3() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars3 />
      <Paragraph9 />
      <Container85 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon20 />
      <Icon21 />
      <Icon22 />
      <Icon23 />
      <Icon24 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"종합소득세 신고 시즌에 혼자 처리하다 실수를 발견했어요. 세무사분이 빠르게 수정 신고 방법을 알려주셔서 가산세 없이 마무리할 수 있었습니다."`}</p>
    </div>
  );
}

function Image5() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (강민준)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">강민준</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">외식업 · 카페 프랜차이즈</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[125px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">대전 유성구</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]" data-name="Container">
      <Container92 />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container90() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image5 />
      <Container91 />
    </div>
  );
}

function ReviewCard4() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars4 />
      <Paragraph10 />
      <Container90 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars5() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon25 />
      <Icon26 />
      <Icon27 />
      <Icon28 />
      <Icon29 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"직원 산재 처리가 처음이라 막막했는데 노무사분이 서류 준비부터 공단 제출까지 전 과정을 안내해주셨어요. 생각보다 빠르게 처리돼서 감사했습니다."`}</p>
    </div>
  );
}

function Image6() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (윤재원)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">윤재원</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">제조업 · 식품 가공업체 운영</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[139px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">경기 화성시</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Container">
      <Container97 />
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container95() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image6 />
      <Container96 />
    </div>
  );
}

function ReviewCard5() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars5 />
      <Paragraph11 />
      <Container95 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars6() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon30 />
      <Icon31 />
      <Icon32 />
      <Icon33 />
      <Icon34 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"임대인이 계약 갱신을 거부해서 급하게 법률 자문을 받았어요. 변호사분이 권리금 보상 청구 방법을 구체적으로 알려주셔서 합의로 마무리할 수 있었습니다."`}</p>
    </div>
  );
}

function Image7() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (오혜진)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">오혜진</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">뷰티 · 피부관리숍 운영</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[114px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">서울 강남구</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Container">
      <Container102 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container100() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image7 />
      <Container101 />
    </div>
  );
}

function ReviewCard6() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars6 />
      <Paragraph12 />
      <Container100 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#E5E7EB" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars7() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon35 />
      <Icon36 />
      <Icon37 />
      <Icon38 />
      <Icon39 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"부가세 신고를 잘못해서 가산세가 붙을까봐 걱정됐는데, 세무사분이 수정 신고 가능 여부와 절차를 빠르게 확인해주셔서 안심이 됐어요."`}</p>
    </div>
  );
}

function Image8() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (한동훈)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">한동훈</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">리테일 · 스포츠용품 판매</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[125px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">광주 서구</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]" data-name="Container">
      <Container107 />
      <Container108 />
      <Container109 />
    </div>
  );
}

function Container105() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image8 />
      <Container106 />
    </div>
  );
}

function ReviewCard7() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars7 />
      <Paragraph13 />
      <Container105 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars8() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon40 />
      <Icon41 />
      <Icon42 />
      <Icon43 />
      <Icon44 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"아르바이트생과 임금 분쟁이 생겼는데 어떻게 대응해야 할지 몰랐어요. 노무사분이 증거 확보 방법부터 대응 전략까지 명쾌하게 설명해주셨습니다."`}</p>
    </div>
  );
}

function Image9() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (임소연)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">임소연</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">외식업 · 분식집 운영</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[103px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">대구 중구</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103px]" data-name="Container">
      <Container112 />
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container110() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image9 />
      <Container111 />
    </div>
  );
}

function ReviewCard8() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars8 />
      <Paragraph14 />
      <Container110 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p16a99000} fill="#D97706" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stars9() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Stars">
      <Icon45 />
      <Icon46 />
      <Icon47 />
      <Icon48 />
      <Icon49 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-[95_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#374151] text-[14px] w-[286px]">{`"거래처가 공사 대금을 미루면서 내용증명을 보내야 했어요. 변호사분이 법적 효력 있는 문서를 직접 작성해주셔서 일주일 만에 대금을 받을 수 있었습니다."`}</p>
    </div>
  );
}

function Image10() {
  return (
    <div className="relative rounded-[22px] shrink-0 size-[44px]" data-name="Image (서진우)">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute bg-[#e5e7eb] inset-0 rounded-[22px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">서진우</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">서비스업 · 인테리어 업체 운영</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-px relative shrink-0 w-[150px]" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap">경남 창원시</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="Container">
      <Container117 />
      <Container118 />
      <Container119 />
    </div>
  );
}

function Container115() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t content-stretch flex gap-[11px] items-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Image10 />
      <Container116 />
    </div>
  );
}

function ReviewCard9() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] h-[263px] items-start p-[26px] relative rounded-[20px] shrink-0 w-[340px]" data-name="ReviewCard">
      <Stars9 />
      <Paragraph15 />
      <Container115 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[263px] items-start left-[-1800px] top-0 w-[1509px]" data-name="Container">
      <ReviewCard />
      <ReviewCard1 />
      <ReviewCard2 />
      <ReviewCard3 />
      <ReviewCard4 />
      <ReviewCard5 />
      <ReviewCard6 />
      <ReviewCard7 />
      <ReviewCard8 />
      <ReviewCard9 />
    </div>
  );
}

function ContainerTransform() {
  return (
    <div className="content-stretch flex flex-col h-[263px] items-start relative shrink-0 w-full" data-name="Container:transform">
      <Container69 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col h-[263px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ContainerTransform />
    </div>
  );
}

function Button14() {
  return <div className="bg-[#d1d5db] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button15() {
  return <div className="bg-[#d1d5db] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button16() {
  return <div className="bg-[#d1d5db] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button17() {
  return <div className="bg-[#d1d5db] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button18() {
  return <div className="bg-[#d1d5db] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button19() {
  return <div className="bg-[#1b3b2b] h-[8px] relative rounded-[4px] shrink-0 w-[24px]" data-name="Button" />;
}

function Button20() {
  return <div className="bg-[#d1d5db] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button21() {
  return <div className="bg-[#d1d5db] relative rounded-[4px] shrink-0 size-[8px]" data-name="Button" />;
}

function Container120() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-start justify-center pt-[24px] relative shrink-0 w-[1509px]" data-name="Container">
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function ReviewArrowBtn() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="ReviewArrowBtn">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#1b3b2b] text-[20px] text-center whitespace-nowrap">‹</p>
    </div>
  );
}

function ReviewArrowBtn1() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="ReviewArrowBtn">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#1b3b2b] text-[20px] text-center whitespace-nowrap">›</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex gap-[12px] h-[58px] items-start justify-center pt-[14px] relative shrink-0 w-[1509px]" data-name="Container">
      <ReviewArrowBtn />
      <ReviewArrowBtn1 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col h-[393px] items-start pt-[40px] px-[20px] relative shrink-0 w-[1549px]" data-name="Container">
      <Container68 />
      <Container120 />
      <Container121 />
    </div>
  );
}

function ReviewsCarousel() {
  return (
    <div className="bg-[#f9f8f3] content-stretch flex flex-col h-[687px] items-start overflow-clip py-[96px] relative shrink-0 w-full" data-name="ReviewsCarousel">
      <ContainerMargin8 />
      <Container67 />
    </div>
  );
}

function SectionBadge3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e8f0eb] h-[38px] left-1/2 rounded-[24px] top-0 w-[169px]" data-name="SectionBadge">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[18px] left-[84.5px] text-[#1b3b2b] text-[16px] text-center top-[10px] tracking-[0.5px] whitespace-nowrap">자주 묻는 질문</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <SectionBadge3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[54px] relative shrink-0 text-[#111827] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap">궁금한 점을 해결해드립니다</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <Heading3 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">우림에서 자문을 받을 수 있는 분야는 무엇인가요?</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Light',sans-serif] font-light leading-[27px] relative shrink-0 text-[#6b7280] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex items-center justify-between px-[22px] py-[20px] relative shrink-0 w-full" data-name="Button">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container126() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[68px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <Button22 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#1b3b2b] text-[15px] whitespace-nowrap">답변이 얼마나 빨리 오나요?</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="bg-[#1b3b2b] content-stretch flex items-center justify-center relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Light',sans-serif] font-light leading-[27px] relative shrink-0 text-[18px] text-white whitespace-nowrap">−</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex items-center justify-between px-[22px] py-[20px] relative shrink-0 w-full" data-name="Button">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] px-[22px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[734px]">
        <p className="leading-[23.8px] mb-0">단건 자문은 신청 후 24시간 이내 답변이 보장됩니다. 24시 긴급상담을 선택하시면 2시간 이내</p>
        <p className="leading-[23.8px]">전담 전문가가 직접 전화로 연락드리며, 업무일 기준이 아닌 365일 동일하게 운영됩니다.</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-[#e8f0eb] border border-[#c4d9cb] border-solid content-stretch flex flex-col h-[136px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <Button23 />
      <Container128 />
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">전문가 자격은 어떻게 검증되나요?</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Light',sans-serif] font-light leading-[27px] relative shrink-0 text-[#6b7280] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="content-stretch flex items-center justify-between px-[22px] py-[20px] relative shrink-0 w-full" data-name="Button">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[68px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <Button24 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">상담 내용은 비밀이 보장되나요?</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Light',sans-serif] font-light leading-[27px] relative shrink-0 text-[#6b7280] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex items-center justify-between px-[22px] py-[20px] relative shrink-0 w-full" data-name="Button">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[68px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <Button25 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">결제 후 환불이 가능한가요?</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Light',sans-serif] font-light leading-[27px] relative shrink-0 text-[#6b7280] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="content-stretch flex items-center justify-between px-[22px] py-[20px] relative shrink-0 w-full" data-name="Button">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[68px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <Button26 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#111827] text-[15px] whitespace-nowrap">모바일 앱도 있나요?</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Light',sans-serif] font-light leading-[27px] relative shrink-0 text-[#6b7280] text-[18px] whitespace-nowrap">+</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="content-stretch flex items-center justify-between px-[22px] py-[20px] relative shrink-0 w-full" data-name="Button">
      <Text38 />
      <Text39 />
    </div>
  );
}

function Container132() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[68px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <Button27 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[574px] items-start pt-[48px] relative shrink-0 w-[780px]" data-name="Container">
      <Container126 />
      <Container127 />
      <Container129 />
      <Container130 />
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col h-[676px] items-start max-w-[780px] relative shrink-0 w-[780px]" data-name="Container">
      <Container123 />
      <Container125 />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[696px] items-center overflow-clip relative shrink-0 w-full" data-name="Container:margin">
      <Container122 />
    </div>
  );
}

function FaqSection() {
  return (
    <div className="bg-[#f3f7f4] content-stretch flex flex-col h-[868px] items-start px-[24px] py-[96px] relative shrink-0 w-full" data-name="FAQSection">
      <ContainerMargin9 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#1b3b2b] text-[0px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[50px] mb-0 text-[40px]">지금 당장 해결해야 할 문제가 있으신가요?</p>
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[50px] text-[#2a5440] text-[20px]">24시 긴급상담으로 2시간 이내 전문가와 연결됩니다</p>
      </div>
    </div>
  );
}

function HoverBtn() {
  return (
    <div className="bg-[#d97706] content-stretch flex flex-col items-center justify-center px-[36px] py-[17px] relative rounded-[24px] shrink-0" data-name="HoverBtn">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[25.5px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">{` 24시 긴급상담 신청`}</p>
    </div>
  );
}

function HoverBtn1() {
  return (
    <div className="bg-white border border-[#1b3b2b] border-solid content-stretch flex flex-col items-center justify-center px-[32px] py-[17px] relative rounded-[24px] shrink-0" data-name="HoverBtn">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Medium',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#1b3b2b] text-[18px] text-center whitespace-nowrap">일반 상담 신청</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96px] items-start justify-center pt-[36px] relative shrink-0 w-[800px]" data-name="Container">
      <HoverBtn />
      <HoverBtn1 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[800px] relative shrink-0 w-[800px]" data-name="Container">
      <Heading4 />
      <Container134 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container133 />
    </div>
  );
}

function CtaBand() {
  return (
    <div className="bg-[#dadbd0] content-stretch flex flex-col items-start px-[24px] py-[80px] relative shrink-0 w-full" data-name="CTABand">
      <ContainerMargin10 />
    </div>
  );
}

function Container138() {
  return (
    <div className="[word-break:break-word] h-[36px] relative shrink-0 w-full whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[36px] left-0 text-[25px] text-white top-0">우림</p>
      <p className="absolute font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[27px] left-[52px] text-[20px] text-[rgba(255,255,255,0.5)] top-[7px]">祐林</p>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0" data-name="Paragraph:margin">
      <div className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] w-[260px]">
        <p className="leading-[22.1px] mb-0">전국 소상공인과 자영업자를 위한 전문가</p>
        <p className="leading-[22.1px]">1:1 자문 플랫폼.</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container138 />
      <ParagraphMargin1 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[0.8px] uppercase whitespace-nowrap">서비스</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">단건 자문</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">24시 긴급상담</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">서류 검토</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">전문가 찾기</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[121px] items-start pt-[14px] relative shrink-0 w-[168px]" data-name="List">
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
    </div>
  );
}

function Container139() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container140 />
      <List3 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[0.8px] uppercase whitespace-nowrap">분야</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">법률 자문</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">노무 자문</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">세무 자문</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">업종별 특화 자문</p>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[121px] items-start pt-[14px] relative shrink-0 w-[168px]" data-name="List">
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Container141() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container142 />
      <List4 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[0.8px] uppercase whitespace-nowrap">회사</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">우림 소개</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">전문가 파트너 지원</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">블로그</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">공지사항</p>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[121px] items-start pt-[14px] relative shrink-0 w-[168px]" data-name="List">
      <ListItem20 />
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
    </div>
  );
}

function Container143() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container144 />
      <List5 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[0.8px] uppercase whitespace-nowrap">고객지원</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">자주 묻는 질문</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">1:1 문의</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">이용약관</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.55)] whitespace-nowrap">개인정보 처리방침</p>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[121px] items-start pt-[14px] relative shrink-0 w-[168px]" data-name="List">
      <ListItem24 />
      <ListItem25 />
      <ListItem26 />
      <ListItem27 />
    </div>
  );
}

function Container145() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container146 />
      <List6 />
    </div>
  );
}

function Container136() {
  return (
    <div className="border-[rgba(255,255,255,0.1)] border-b border-solid gap-x-[48px] gap-y-[48px] grid grid-cols-[_____336px_168px_168px_168px_168px] grid-rows-[_153.50px] h-[195px] pb-[40px] relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Container139 />
      <Container141 />
      <Container143 />
      <Container145 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">© 2026 우림 祐林. All rights reserved. | 사업자등록번호: 123-45-67890</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">고객센터: 02-1234-5678 | help@woorim.kr</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex h-[58px] items-start justify-between pt-[40px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container148 />
      <Container149 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col h-[253px] items-start max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container136 />
      <Container147 />
    </div>
  );
}

function ContainerMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[253px] items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container135 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#111827] content-stretch flex flex-col h-[353px] items-start pb-[36px] pt-[64px] px-[24px] relative shrink-0 w-full" data-name="Footer">
      <ContainerMargin11 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f9f8f3] content-stretch flex flex-col h-[5234px] items-start pt-[64px] relative shrink-0 w-[1549px]" data-name="Container">
      <HeroSlider />
      <OverviewBanner />
      <ConsultationForm />
      <PricingSection />
      <ReviewsCarousel />
      <FaqSection />
      <CtaBand />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[#f9f8f3] content-stretch flex flex-col h-[5234px] items-start relative shrink-0 w-full" data-name="Body">
      <Container />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[61px] relative shrink-0 w-[65px]" data-name="로고">
      <svg className="absolute block inset-0 size-full" fill="none" height="61" preserveAspectRatio="none" viewBox="0 0 65 61" width="65">
        <g id="ë¡ê³ ">
          <path d={svgPaths.p3005500} id="Vector" stroke="#B7D39F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.64203" />
          <g id="Group">
            <path d={svgPaths.p2909cc00} fill="#3C8B4A" id="Vector_2" />
            <path d={svgPaths.p19e5ea00} fill="#3C8B4A" id="Vector_3" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.pecb9600} fill="#3C8B4A" id="Vector_4" />
            <g id="Group_3">
              <path d={svgPaths.p40ebf00} fill="#3C8B4A" id="Vector_5" />
              <path d={svgPaths.p22038780} fill="#3C8B4A" id="Vector_6" />
              <path d="M45 17H43V24H45V17Z" fill="#3C8B4A" id="Vector_7" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Navbar1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Navbar">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="Navbar">
          <path d={svgPaths.p2797af80} fill="#1B3B2B" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HoverBtn2() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[1.106px] border-solid content-stretch flex h-[34px] items-center px-[14.378px] py-[7.742px] relative rounded-[24px] shrink-0 w-[48px]" data-name="HoverBtn">
      <Navbar1 />
    </div>
  );
}

function Navbar2() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Navbar">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="Navbar">
          <path d={svgPaths.p95f9700} fill="#1B3B2B" id="Vector" />
          <path d={svgPaths.p2b9a16f1} fill="#D97706" id="Vector_2" />
          <path d={svgPaths.p16e29600} fill="#EA4335" id="Vector_3" />
          <path d={svgPaths.p4345600} fill="#34A853" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function HoverBtn3() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[1.106px] border-solid content-stretch flex h-[34px] items-center px-[14.378px] py-[7.742px] relative rounded-[24px] shrink-0 w-[48px]" data-name="HoverBtn">
      <Navbar2 />
    </div>
  );
}

function HoverBtn4() {
  return (
    <div className="bg-[#d97706] content-stretch drop-shadow-[0px_2.212px_4.424px_rgba(217,119,6,0.35)] flex flex-col h-[42px] items-center justify-center px-[19.907px] py-[9.954px] relative rounded-[24px] shrink-0 w-[128px]" data-name="HoverBtn">
      <p className="[word-break:break-word] font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[21.566px] relative shrink-0 text-[14.378px] text-center text-white tracking-[-0.2212px] whitespace-nowrap">{` 24시 긴급상담`}</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex gap-[11.06px] h-[42px] items-center justify-end relative shrink-0 w-[245px]" data-name="Container">
      <HoverBtn2 />
      <HoverBtn3 />
      <HoverBtn4 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[64px] items-center justify-between min-w-px px-[30px] relative" data-name="Container">
      <Component />
      <Container151 />
    </div>
  );
}

function ContainerMargin12() {
  return (
    <div className="content-stretch flex h-[65px] items-center justify-center relative shrink-0 w-[1549px]" data-name="Container:margin">
      <Container150 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#f9f8f3] border-[rgba(0,0,0,0)] border-b border-solid content-stretch flex flex-col h-[65px] items-start left-0 top-0 w-[1549px]" data-name="Navbar">
      <ContainerMargin12 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Icon">
          <path d={svgPaths.p1d010200} fill="white" fillOpacity="0.95" id="Vector" />
          <path d="M10 10H18M10 14H15" id="Vector_2" stroke="#1B3B2B" strokeLinecap="round" strokeWidth="1.8" />
          <path d={svgPaths.p21eb7a00} fill="#D97706" id="Vector_3" />
          <path d="M21 5V9M19 7H23" id="Vector_4" stroke="white" strokeLinecap="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function AiChatFab() {
  return (
    <div className="absolute bg-[#377354] content-stretch drop-shadow-[0px_4px_8px_rgba(27,59,43,0.35)] flex items-center justify-center left-[1461px] rounded-[30px] size-[60px] top-[807px]" data-name="AIChatFAB">
      <Icon50 />
    </div>
  );
}

export default function c() {
  return (
    <div className="bg-[#f9f8f3] content-stretch flex flex-col items-start relative size-full" data-name="프로젝트C">
      <Body />
      <Navbar />
      <AiChatFab />
    </div>
  );
}