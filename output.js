//Wed Jun 18 2025 07:09:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var V5Ic5g = Object['\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079'],
  PYLgQJ,
  d_nyNKs,
  JPZucn,
  xOxXlqT,
  otvQzcl,
  y1VKxlB,
  jtFipYn,
  wfzQh1;
function tvOkp2() {
  return globalThis;
}
function JhjPy5() {
  return global;
}
function fBZspiY() {
  return window;
}
function VOPyUp() {
  return new Function("return this")();
}
function lQHC5B2(V5Ic5g = [tvOkp2, JhjPy5, fBZspiY, VOPyUp], sZYjBjd, HghMiV = [], osrRBnb = 0x0, PYLgQJ) {
  sZYjBjd = sZYjBjd;
  try {
    sZYjBjd = Object
    HghMiV["push"](''["__proto__"]["constructor"]["name"])
  } catch (e) {}
  CvAmms: for (osrRBnb = osrRBnb; osrRBnb < V5Ic5g.length; osrRBnb++) try {
    sZYjBjd = V5Ic5g[osrRBnb]();
    for (PYLgQJ = 0; PYLgQJ < HghMiV["length"]; PYLgQJ++) if (typeof sZYjBjd[HghMiV[PYLgQJ]] === "undefined") {
      continue CvAmms;
    }
    return sZYjBjd;
  } catch (e) {}
  return sZYjBjd || this;
}
PYLgQJ = lQHC5B2() || {}
d_nyNKs = PYLgQJ["TextDecoder"]
JPZucn = PYLgQJ["Uint8Array"]
xOxXlqT = PYLgQJ["Buffer"]
otvQzcl = PYLgQJ.String || String
y1VKxlB = PYLgQJ.Array || Array
function qO6LHr(...V5Ic5g) {
  return V5Ic5g[V5Ic5g["length"] - 0x1];
}
function btDXsDR(V5Ic5g, HghMiV, osrRBnb, PYLgQJ) {
  switch (wfzQh1) {
    case -0x27:
      return !V5Ic5g;
    case -0x7:
      return V5Ic5g / HghMiV;
    case -36:
      return V5Ic5g + HghMiV;
  }
}
function X3e_lW(nXIuZUb) {
  return qO6LHr(nXIuZUb = wfzQh1 + (wfzQh1 = nXIuZUb, 0), nXIuZUb);
}
wfzQh1 = wfzQh1;
const GHObts = require('./jdCookie'),
  hbOzcO = require('./utils/Rebels_sendJDNotify'),
  eUi5cFz = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: WICPp_
  } = require('./utils/Rebels_H');
let NJnEybd = process["env"]["jd_plus_blindbox__threads"] || '\x31';
const GLhJ9c = process["env"]["jd_plus_blindbox_interval"] || "1500",
  s4u4A4d = (process["env"]["jd_plus_blindbox_notify"] || process["env"]["jd_plus_blindbox_Notify"]) === "true",
  Z3CNHZu = (process["env"]["jd_plus_blindbox_pinFilter"] || '')["split"]('\u0040'),
  P3ZGDel = 0x32;
let gutfRar = false,
  k5hcRN = Object["keys"](GHObts)["map"](nXIuZUb => GHObts[nXIuZUb])["filter"](nXIuZUb => nXIuZUb);
if (btDXsDR(k5hcRN[0], X3e_lW(-0x27))) {
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process["exit"](1)
}
btDXsDR((async () => {
  if (qO6LHr(hbOzcO["config"]({
    ["title"]: $["name"]
  }), await qang4R(), s4u4A4d && hbOzcO["getMessage"]())) {
    await hbOzcO["push"]();
  }
})()["catch"](nXIuZUb => {
  var V5Ic5g = ["logErr"];
  return $[V5Ic5g[0x0]](nXIuZUb);
})["finally"](() => $["done"]()), X3e_lW(-0x27));
async function qang4R() {
  try {
    try {
      const xOxXlqT = parseInt(NJnEybd);
      if (xOxXlqT > 0 && xOxXlqT !== 0x1) {
        NJnEybd = xOxXlqT;
      }
    } catch {
      NJnEybd = 0x1;
    }
    if (qO6LHr(NJnEybd = Math["min"](NJnEybd, P3ZGDel), $["waitTime"] = null, GLhJ9c)) {
      try {
        const otvQzcl = parseInt(GLhJ9c);
        if (otvQzcl >= 0) {
          var y1VKxlB = {
            ["TRGQi3"]: "waitTime"
          };
          $[y1VKxlB["TRGQi3"]] = otvQzcl;
        }
      } catch {
        console["log"]("⚠ 自定义运行间隔时长设置错误")
      }
    }
    if (qO6LHr($["needRemoveCookieIndex"] = [], console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`间隔时长: [${btDXsDR($["waitTime"], 0x3e8, X3e_lW(-7))}秒]运行间隔时长`), console["log"](`代理开关: [${eUi5cFz["getProxyStatus"]()}]`), console["log"](`通知推送: [${s4u4A4d ? '开启' : '关闭'}]`), console["log"](`账号过滤: [${Z3CNHZu["join"]('\u002c\u0020')}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), await eUi5cFz["concTask"](NJnEybd, k5hcRN, Jgu5FWE), $["runEnd"] = false, $["needRemoveCookieIndex"]["length"]) > 0) {
      k5hcRN = k5hcRN["filter"]((HghMiV, PYLgQJ) => {
        return btDXsDR($["needRemoveCookieIndex"]["includes"](btDXsDR(PYLgQJ, 1, X3e_lW(-36))), X3e_lW(-39));
      })
      $["needRemoveCookieIndex"] = []
    }
    const NIknNx = hbOzcO["getMessage"]();
    if (NIknNx) {
      console["log"](`\n📣 运行结果\n${NIknNx["replace"](/：/g, " ➜ ")}`)
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function Jgu5FWE(V5Ic5g, HghMiV) {
  if ($["runEnd"] && true) {
    return {
      ["runEnd"]: true
    };
  }
  const y1VKxlB = decodeURIComponent(eUi5cFz["getCookieValue"](V5Ic5g, "pt_pin")),
    jtFipYn = `【账号${HghMiV}】${eUi5cFz["dataMasking"](y1VKxlB, {
      ["printWidth"]: 6
    })}：`,
    KrQqeCt = hbOzcO["create"](HghMiV, y1VKxlB);
  if (Z3CNHZu["length"] > 0 && (Z3CNHZu["includes"](y1VKxlB) || Z3CNHZu["includes"](encodeURIComponent(y1VKxlB)))) {
    return qO6LHr(KrQqeCt["fix"]("已设置跳过运行当前账号"), console["log"](KrQqeCt["getInlineContent"]()), $["needRemoveCookieIndex"]["push"](HghMiV), undefined);
  }
  const ZnFmjxk = await eUi5cFz["getLoginStatus"](V5Ic5g);
  if (btDXsDR(ZnFmjxk, X3e_lW(-0x27)) && typeof ZnFmjxk === "boolean") {
    var JMGb9y8 = ["账号无效"];
    return qO6LHr(console["log"](`${jtFipYn}账号无效`), KrQqeCt["fix"](JMGb9y8[0]), $["needRemoveCookieIndex"]["push"](HghMiV), undefined);
  }
  const Fws6vs = eUi5cFz["genUA"](y1VKxlB);
  let zz2Sgt;
  if (qO6LHr(await UKdOBe2("main"), zz2Sgt)) {
    if (btDXsDR(gutfRar, wfzQh1 = -39) && zz2Sgt["prizePoolList"]?.["length"] > 0x0) {
      gutfRar = true
      console["log"](`活动奖品池：`)
      zz2Sgt["prizePoolList"]["forEach"]((V5Ic5g, d_nyNKs) => {
        console["log"](`${btDXsDR(d_nyNKs, 1, X3e_lW(-0x24))}. ${V5Ic5g["mainTitle"]}${V5Ic5g["subTitle"]}`)
      })
      console["log"]('')
    }
    if (zz2Sgt["joinStatus"] == 0x0) {
      if (qO6LHr(console["log"](`${jtFipYn}今日还未参与盲盒活动`), await UKdOBe2("delivery_component"), $["runEnd"])) {
        return {
          ["runEnd"]: true
        };
      }
      await $["wait"](parseInt(btDXsDR($["waitTime"] * 0x1, 0x1f4, wfzQh1 = -36), 10));
    } else {
      if (zz2Sgt["joinStatus"] == 2) {
        const lQHC5B2 = zz2Sgt["sendBenefitList"]?.[0];
        if (lQHC5B2 && true) {
          var GHObts = {
            N9BV55: "couponInfoList"
          };
          if (lQHC5B2["hongBaoInfoList"]?.["length"] > 0x0) {
            lQHC5B2["hongBaoInfoList"]["forEach"](V5Ic5g => {
              const JPZucn = V5Ic5g["discount"],
                otvQzcl = V5Ic5g["validTime"],
                y1VKxlB = V5Ic5g["limitStr"] || '';
              console["log"](`${jtFipYn}获得${JPZucn}元红包${y1VKxlB}，有效期至${otvQzcl} 🎁`)
              KrQqeCt["insert"](`获得${JPZucn}元红包${y1VKxlB}，有效期至${otvQzcl} 🎁`)
            });
          }
          if (lQHC5B2[GHObts.N9BV55]?.["length"] > 0x0) {
            lQHC5B2["couponInfoList"]["forEach"](V5Ic5g => {
              const JPZucn = V5Ic5g["quotaDesc"] || '',
                xOxXlqT = V5Ic5g["discount"],
                otvQzcl = V5Ic5g["validTime"],
                y1VKxlB = V5Ic5g["limitStr"] || '';
              console["log"](`${jtFipYn}获得${y1VKxlB}(${JPZucn}${xOxXlqT}元)，有效期至${otvQzcl} 🎫`)
              KrQqeCt["insert"](`获得${y1VKxlB}(${JPZucn}${xOxXlqT}元)，有效期至${otvQzcl} 🎫`)
            });
          }
        }
      } else {
        console["log"](`${jtFipYn}非PLUS会员无法参与盲盒活动`);
      }
    }
  }
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  await $["wait"](parseInt(btDXsDR($["waitTime"] * 0x1, 0x1f4, wfzQh1 = -0x24), 0xa));
  async function k5hcRN(V5Ic5g, HghMiV) {
    try {
      switch (V5Ic5g) {
        case "main":
          if (HghMiV["code"] === "1711000") {
            zz2Sgt = HghMiV.rs;
          } else {
            msg = eUi5cFz["getErrorMsg"](HghMiV)
            console["log"](`${jtFipYn}盲盒主页失败：${msg}`)
          }
          break;
        case "delivery_component":
          if (HghMiV["code"] == 0 && btDXsDR(HghMiV?.["errorCode"], wfzQh1 = -0x27) && true) {
            const y1VKxlB = HghMiV?.["data"]?.["compInfoList"]?.[0]?.["data"]?.["rightResourceDetails"]?.[0];
            if (y1VKxlB) {
              if (y1VKxlB["hongBaoInfo"]) {
                var AUYwkr6 = ["discount"];
                const NIknNx = y1VKxlB["hongBaoInfo"],
                  ZnFmjxk = NIknNx[AUYwkr6[0x0]],
                  JMGb9y8 = NIknNx["extInfo"]?.["endTime"] || '',
                  i8ERQ16 = NIknNx["limitStr"] || '';
                console["log"](`${jtFipYn}获得${ZnFmjxk}元红包${i8ERQ16}，有效期至${JMGb9y8} 🎁`)
                KrQqeCt["insert"](`获得${ZnFmjxk}元红包${i8ERQ16}，有效期至${JMGb9y8} 🎁`)
              }
              if (y1VKxlB["couponInfo"]) {
                const JhjPy5 = y1VKxlB["couponInfo"],
                  fBZspiY = JhjPy5["extInfo"]?.["quotaDesc"] || '',
                  ZnFmjxk = JhjPy5["couponDiscount"],
                  JMGb9y8 = JhjPy5["extInfo"]?.["endTime"] || '',
                  i8ERQ16 = JhjPy5["limitStr"] || '';
                console["log"](`${jtFipYn}获得${i8ERQ16}(${fBZspiY}${ZnFmjxk}元)，有效期至${JMGb9y8} 🎫`)
                KrQqeCt["insert"](`获得${i8ERQ16}(${fBZspiY}${ZnFmjxk}元)，有效期至${JMGb9y8} 🎫`)
              }
            } else {
              var lQHC5B2 = ["log"];
              console[lQHC5B2[0]](`${jtFipYn}非PLUS会员无法参与盲盒活动`);
            }
          } else {
            msg = eUi5cFz["getErrorMsg"](HghMiV)
            console["log"](`${jtFipYn}盲盒失败：${msg}`)
          }
      }
    } catch (e) {
      var GLhJ9c = "log";
      console[GLhJ9c](`❌ 未能正确处理 ${V5Ic5g} 请求响应 ${e["message"] || e}`);
    }
  }
  async function UKdOBe2(HghMiV) {
    if ($["runEnd"]) {
      return;
    }
    let KrQqeCt = '',
      AUYwkr6 = null,
      NIknNx = null,
      ZnFmjxk = "POST",
      JMGb9y8 = {},
      i8ERQ16 = {};
    switch (HghMiV) {
      case "main":
        i8ERQ16 = {
          ["appId"]: "b63ff",
          ["functionId"]: "bff_marketing_interaction",
          ["appid"]: "plus_business",
          ["clientVersion"]: eUi5cFz["getLatestAppVersion"](),
          ["client"]: "apple",
          ["body"]: {
            ["scene"]: "blindBox",
            ["touchPoint"]: "plusIndex"
          },
          ua: Fws6vs,
          t: true
        }
        JMGb9y8 = await WICPp_["getH5st"](i8ERQ16)
        KrQqeCt = "https://api.m.jd.com/client.action"
        AUYwkr6 = JMGb9y8["paramsData"]
        break;
      case "delivery_component":
        i8ERQ16 = {
          ["appId"]: "124a8",
          ["functionId"]: "delivery_component",
          ["appid"]: "plus_business",
          ["clientVersion"]: eUi5cFz["getLatestAppVersion"](),
          ["client"]: "apple",
          ["body"]: {
            ["ubbLocId"]: "plus_ttmh",
            ["area"]: "4,133,58530,0"
          },
          ua: Fws6vs,
          t: true
        }
        JMGb9y8 = await WICPp_["getH5st"](i8ERQ16)
        KrQqeCt = "https://api.m.jd.com/client.action"
        AUYwkr6 = JMGb9y8["paramsData"]
        break;
      default:
        console["log"](`❌ 未知请求 ${HghMiV}`);
        return;
    }
    const zz2Sgt = {
      ["loginType"]: 0x2,
      ["loginWQBiz"]: '',
      ["scval"]: "test07",
      ["pin"]: y1VKxlB
    };
    if (AUYwkr6 && true) {
      Object["assign"](AUYwkr6, zz2Sgt);
    }
    if (NIknNx) {
      Object["assign"](NIknNx, zz2Sgt);
    }
    const fBZspiY = {
      ["url"]: KrQqeCt,
      ["method"]: ZnFmjxk,
      ["headers"]: {
        ["Host"]: "api.m.jd.com",
        ["Accept"]: "*/*",
        ["Cookie"]: V5Ic5g,
        ["User-Agent"]: Fws6vs,
        ["Accept-Language"]: "zh-Hans-CN;q=1",
        ["Accept-Encoding"]: "gzip, deflate, br",
        ["Referer"]: "https://h5.m.jd.com/rn/42yjy8na6pFsq1cx9MJQ5aTgu3kX/index.html?tttparams=OTxiiOeyJnTGF0IjoiMzAuOTM3OTc2IiwidW5fYXJlYSI6IjRfMTMzXzU4NTMwXzAiLCJkTGF0IjoiIiwicHJzdGF0ZSI6IjAiLCJhZGRyZXNzSWQiOiIxMzg3NjMyODgiLCJsYXQiOiIyOS41MDI3NTgiLCJwb3NMYXQiOiIzMC45Mzc5NzYiLCJwb3NMbmciOiIxMDguNjg2NTM2IiwiZ3BzX2FyZWEiOiI0XzUwOTUyXzYwNDI2XzAiLCJsbmciOiIxMDYuNDc2NTk5IiwidWVtcHMiOiIwLTAtMiIsImdMbmciOiIxMDguNjg2NTM2IiwibW9kZWwiOiJpUGhvbmU5LDIiLCJkTG5nIjoiIn60%3D&has_native=0&jumpFrom=1&source=AppHome&sid=94c8fde9792f48dbdb86b75f99f42eaw&un_area=4_133_58530_0"
      },
      ["params"]: NIknNx,
      ["data"]: AUYwkr6,
      ["timeout"]: 0x7530,
      ["httpsTlsOptions"]: {
        ["secureProtocol"]: "TLSv1_2_method",
        ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
      }
    };
    if (ZnFmjxk === "GET") {
      delete (delete fBZspiY["data"], fBZspiY["headers"]["Content-Type"]);
    }
    const lQHC5B2 = 1;
    let GHObts = 0,
      NJnEybd = null;
    while (GHObts < lQHC5B2) {
      if (GHObts > 0x0) {
        await $["wait"](0x3e8);
      }
      const P3ZGDel = await eUi5cFz["request"](fBZspiY);
      if (btDXsDR(P3ZGDel["success"], wfzQh1 = -39)) {
        NJnEybd = `🚫 ${HghMiV} 请求失败 ➜ ${P3ZGDel["error"]}`
        GHObts++
        continue;
      }
      if (btDXsDR(P3ZGDel["data"], wfzQh1 = -0x27)) {
        NJnEybd = `🚫 ${HghMiV} 请求失败 ➜ 无响应数据`
        GHObts++
        continue;
      }
      await k5hcRN(HghMiV, P3ZGDel["data"]);
      break;
    }
    if (GHObts >= lQHC5B2) {
      console["log"](NJnEybd);
    }
  }
}