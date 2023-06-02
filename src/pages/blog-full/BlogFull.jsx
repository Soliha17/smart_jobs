import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import "./blogFull.css";

import { threeBlogDatas } from "../../mock/threeBlogCard";

import SendIcon from "../../assets/images/share-icon-blog.svg";
import BlogFullImg from "../../assets/images/blog-full-img.png";
import BlogCard from "../../components/atoms/blog-card/BlogCard";

import Footer from "../../components/layout/footer/Footer";
import { useTranslation } from "react-i18next";

const BlogFull = () => {
  const { t } = useTranslation();

  return (
    <div className="blog-page">
      <div className="blog-full">
        <div className="container">
          <Breadcrumb
            items={[
              {
                title: <Link to={"/"}>{t("homePage")}</Link>,
              },
              {
                title: <Link to={"/blog"}>{t("blog")}</Link>,
              },
              {
                title: "Maqola",
              },
            ]}
          />
          <div className="content__blog-full">
            <p className="blog-title">
              Qanday qilib “Rekrutorlar o’ljasiga” aylanish mumkin qanday qilib{" "}
            </p>
            <div className="actions__blog-full">
              <p className="date__blog">18-mart, 2023</p>
              <div>
                <img src={SendIcon} alt="SendIcon" />
                <p className="date__blog">{t("sharing")}</p>
              </div>
            </div>
            <div className="card__blog-full">
              <p>
                Bizni o‘rab turgan barcha harflar ortida mualliflar ham bor – u
                uy yonidagi “Mahsulotlar” belgisimi yoki liftdagi ma’lumot
                lavhasimi, gazeta yoki jurnaldagi matn terishmi. Va bu harflar
                turli xil rassomlar, dizaynerlar tomonidan ixtiro qilingan va
                chizilgan - ehtimol ular qaerda ishlatilishini o'ylab. Ular
                harflari qanday hajmda ishlatilishi, qaysi masofadan o'qilishi,
                qanday chop etilishi haqida o'ylashdi. Ko'pgina vaziyatlar,
                kontekstlar, joylar va vazifalar juda ko'p shriftlarni
                anglatadi.
              </p>
              <img src={BlogFullImg} alt="BlogFullImg" />
              <p>
                Bizni o‘rab turgan barcha harflar ortida mualliflar ham bor – u
                uy yonidagi “Mahsulotlar” belgisimi yoki liftdagi ma’lumot
                lavhasimi, gazeta yoki jurnaldagi matn terishmi. Va bu harflar
                turli xil rassomlar, dizaynerlar tomonidan ixtiro qilingan va
                chizilgan - ehtimol ular qaerda ishlatilishini o'ylab. Ular
                harflari qanday hajmda ishlatilishi, qaysi masofadan o'qilishi,
                qanday chop etilishi haqida o'ylashdi. Ko'pgina vaziyatlar,
                kontekstlar, joylar va vazifalar juda ko'p shriftlarni
                anglatadi.
              </p>{" "}
              <br />
              <p>
                Bizni o‘rab turgan barcha harflar ortida mualliflar ham bor – u
                uy yonidagi “Mahsulotlar” belgisimi yoki liftdagi ma’lumot
                lavhasimi, gazeta yoki jurnaldagi matn terishmi. Va bu harflar
                turli xil rassomlar, dizaynerlar tomonidan ixtiro qilingan va
                chizilgan - ehtimol ular qaerda ishlatilishini o'ylab. Ular
                harflari qanday hajmda ishlatilishi, qaysi masofadan o'qilishi,
                qanday chop etilishi haqida o'ylashdi. Ko'pgina vaziyatlar,
                kontekstlar, joylar va vazifalar juda ko'p shriftlarni
                anglatadi.
              </p>{" "}
              <br />
              <p>
                Bizni o‘rab turgan barcha harflar ortida mualliflar ham bor – u
                uy yonidagi “Mahsulotlar” belgisimi yoki liftdagi ma’lumot
                lavhasimi, gazeta yoki jurnaldagi matn terishmi. Va bu harflar
                turli xil rassomlar, dizaynerlar tomonidan ixtiro qilingan va
                chizilgan - ehtimol ular qaerda ishlatilishini o'ylab. Ular
                harflari qanday hajmda ishlatilishi, qaysi masofadan o'qilishi,
                qanday chop etilishi haqida o'ylashdi. Ko'pgina vaziyatlar,
                kontekstlar, joylar va vazifalar juda ko'p shriftlarni
                anglatadi.
              </p>{" "}
              <br />
              <p>
                Bizni o‘rab turgan barcha harflar ortida mualliflar ham bor – u
                uy yonidagi “Mahsulotlar” belgisimi yoki liftdagi ma’lumot
                lavhasimi, gazeta yoki jurnaldagi matn terishmi. Va bu harflar
                turli xil rassomlar, dizaynerlar tomonidan ixtiro qilingan va
                chizilgan - ehtimol ular qaerda ishlatilishini o'ylab. Ular
                harflari qanday hajmda ishlatilishi, qaysi masofadan o'qilishi,
                qanday chop etilishi haqida o'ylashdi. Ko'pgina vaziyatlar,
                kontekstlar, joylar va vazifalar juda ko'p shriftlarni
                anglatadi.
              </p>
            </div>
            <div className="same-cards__blog-full">
              <p className="title"> {t("similarArticles")} </p>
              <div className="container__blog">
                {threeBlogDatas.map(({ id, title, date, text, img }) => {
                  return (
                    <BlogCard
                      key={id}
                      title={title}
                      img={img}
                      text={text}
                      date={date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogFull;
