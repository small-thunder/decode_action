//Fri Jun 13 2025 11:46:10 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('整点抽');
var T3QS9n7 = Object['defineProperty'],
  Kn8eTI0,
  n6oO3Zr,
  GhFbA60,
  Z1OnoDo,
  WSOSQJ,
  t0khRB1,
  agdiHY,
  SKYTGJX;
function UrCVC5() {
  return globalThis;
}
function JZ4zMFc() {
  return global;
}
function Sb6Gcuv() {
  return window;
}
function NUnwR3() {
  return new Function('\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0074\u0068\u0069\u0073')();
}
function oUfiq43(T3QS9n7 = [UrCVC5, JZ4zMFc, Sb6Gcuv, NUnwR3], Lr6uxDp, APcbf6 = [], Kn8eTI0 = 0x0, n6oO3Zr) {
  Lr6uxDp = Lr6uxDp;
  try {
    Lr6uxDp = Object
    APcbf6["push"](''["__proto__"].constructor["name"])
  } catch (e) {}
  Srn4dHS: for (Kn8eTI0 = Kn8eTI0; Kn8eTI0 < T3QS9n7["length"]; Kn8eTI0++) try {
    Lr6uxDp = T3QS9n7[Kn8eTI0]();
    for (n6oO3Zr = 0; n6oO3Zr < APcbf6["length"]; n6oO3Zr++) if (typeof Lr6uxDp[APcbf6[n6oO3Zr]] === "undefined") {
      continue Srn4dHS;
    }
    return Lr6uxDp;
  } catch (e) {}
  return Lr6uxDp || this;
}
Kn8eTI0 = oUfiq43() || {}
n6oO3Zr = Kn8eTI0.TextDecoder
GhFbA60 = Kn8eTI0.Uint8Array
Z1OnoDo = Kn8eTI0.Buffer
WSOSQJ = Kn8eTI0.String || String
t0khRB1 = Kn8eTI0.Array || Array
function Gz8Awqo(...T3QS9n7) {
  return T3QS9n7[T3QS9n7["length"] - 0x1];
}
function tJ16qh(EHbXroa, T3QS9n7) {
  switch (SKYTGJX) {
    case 17:
      return EHbXroa + T3QS9n7;
    case -15:
      return !EHbXroa;
    case -0x18:
      return EHbXroa / T3QS9n7;
    case -14:
      return EHbXroa - T3QS9n7;
    case -0x8:
      return EHbXroa * T3QS9n7;
  }
}
function ga1_lQX(EHbXroa) {
  return Gz8Awqo(EHbXroa = SKYTGJX + (SKYTGJX = EHbXroa, 0x0), EHbXroa);
}
SKYTGJX = SKYTGJX;
const Bzy5zX = require('./jdCookie'),
  K1BX7X = require('./utils/Rebels_sendJDNotify'),
  RsdPx0 = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: rDJwEVm
  } = require('./utils/Rebels_H');
let mXv6mJ = null,
  s6YfyF = null;
const Ypv50g_ = new Date()["getHours"](),
  yUa3GV = new Date()["getMinutes"](),
  vD2UB9 = tJ16qh(Ypv50g_, yUa3GV / 0x3c, SKYTGJX = 0x11);
let mI7FLoZ = false,
  tPxaqq = false,
  rTVxgMk = process["env"]["jd_daycj_threads"] || '\u0031';
const RT7gp4 = process["env"]["jd_daycj_interval"] || "2000",
  ulPQZe = (process["env"]["jd_daycj_notify"] || process["env"]["jd_daycj_Notify"]) === "true",
  vPO29f = (process["env"]["jd_daycj_pinFilter"] || '')["split"]('@'),
  GfwImcs = process["env"]["jd_daycj_prizeNotify"] === "true",
  N_C5Y9 = 0x64;
let rk61Wa = Object["keys"](Bzy5zX)["map"](EHbXroa => Bzy5zX[EHbXroa])["filter"](EHbXroa => EHbXroa);
if (tJ16qh(rk61Wa[0], ga1_lQX(-0xf))) {
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process["exit"](0x1)
}
tJ16qh((async () => {
  if (Gz8Awqo(K1BX7X["config"]({
    ["title"]: $["name"]
  }), await md6_qO(), ulPQZe && K1BX7X["getMessage"]())) {
    await K1BX7X["push"]();
  }
})()["catch"](EHbXroa => {
  return $["logErr"](EHbXroa);
})["finally"](() => {
  var EHbXroa = {
    ["QePLek"]: "done"
  };
  return $[EHbXroa.QePLek]();
}), ga1_lQX(-0xf));
async function md6_qO() {
  try {
    try {
      const Z1OnoDo = parseInt(rTVxgMk);
      if (Z1OnoDo > 0 && Z1OnoDo !== 0x1 && true) {
        rTVxgMk = Z1OnoDo;
      }
    } catch {
      rTVxgMk = 1;
    }
    if (Gz8Awqo(rTVxgMk = Math["min"](rTVxgMk, N_C5Y9), $["waitTime"] = null, RT7gp4)) {
      try {
        const WSOSQJ = parseInt(RT7gp4);
        if (WSOSQJ >= 0x0) {
          $["waitTime"] = WSOSQJ;
        }
      } catch {
        console["log"]("⚠ 自定义运行间隔时长设置错误");
      }
    }
    const jG0T1j = Gz8Awqo($["needRemoveCookieIndex"] = [], console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`间隔时长: [${tJ16qh($["waitTime"], 0x3e8, ga1_lQX(-0x18))}秒]运行间隔时长`), console["log"](`代理开关: [${RsdPx0["getProxyStatus"]()}]`), console["log"](`通知推送: [${ulPQZe ? '开启' : '关闭'}]`), console["log"](`账号过滤: [${vPO29f["join"]('\x2c\x20')}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), `jd_${RsdPx0["genRandomString"](13, "0123456789abcdefghijklmnopqrstuvwxyz")}`),
      {
        ["token"]: eb72rZg,
        ["actKey"]: FLtzwFo
      } = Gz8Awqo($.UA = RsdPx0["genUA"](jG0T1j), await _crHfFz("https://prodev.m.jd.com/mall/active/VAjs3vpayA513UwxL5XC4eGBXqY/index.html"));
    if (Gz8Awqo(mXv6mJ = eb72rZg, s6YfyF = FLtzwFo, tJ16qh(mXv6mJ, SKYTGJX = -0xf) && tJ16qh(s6YfyF, SKYTGJX = -0xf))) {
      return Gz8Awqo(console["log"]("获取token和actKey失败，请检查网络"), undefined);
    }
    if (Gz8Awqo(await RsdPx0["concTask"](rTVxgMk, rk61Wa, ShmcXD), $["runEnd"] = false, $["needRemoveCookieIndex"]["length"]) > 0x0) {
      rk61Wa = rk61Wa["filter"]((Lr6uxDp, Kn8eTI0) => {
        var n6oO3Zr = "includes";
        return tJ16qh($["needRemoveCookieIndex"][n6oO3Zr](tJ16qh(Kn8eTI0, 1, SKYTGJX = 17)), ga1_lQX(-0xf));
      })
      $["needRemoveCookieIndex"] = []
    }
    const hYn4L2H = K1BX7X["getMessage"]();
    if (hYn4L2H && true) {
      var UrCVC5 = {
        ["pdAPdl"]: "replace",
        uZ1ruvu: " ➜ "
      };
      console["log"](`\n📣 运行结果\n${hYn4L2H[UrCVC5.pdAPdl](/：/g, UrCVC5["uZ1ruvu"])}`);
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function ShmcXD(T3QS9n7, Lr6uxDp) {
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const GhFbA60 = decodeURIComponent(RsdPx0["getCookieValue"](T3QS9n7, "pt_pin")),
    Z1OnoDo = `【账号${Lr6uxDp}】${RsdPx0["dataMasking"](GhFbA60, {
      ["printWidth"]: 6
    })}：`,
    WSOSQJ = K1BX7X["create"](Lr6uxDp, GhFbA60);
  if (vPO29f["length"] > 0x0 && (vPO29f["includes"](GhFbA60) || vPO29f["includes"](encodeURIComponent(GhFbA60)))) {
    var t0khRB1 = ["push"];
    return Gz8Awqo(WSOSQJ["fix"]("已设置跳过运行当前账号"), console["log"](WSOSQJ["getInlineContent"]()), $["needRemoveCookieIndex"][t0khRB1[0]](Lr6uxDp), undefined);
  }
  const eb72rZg = await RsdPx0["getLoginStatus"](T3QS9n7);
  if (tJ16qh(eb72rZg, SKYTGJX = -15) && typeof eb72rZg === "boolean") {
    return Gz8Awqo(console["log"](`${Z1OnoDo}账号无效`), WSOSQJ["fix"]("账号无效"), $["needRemoveCookieIndex"]["push"](Lr6uxDp), undefined);
  }
  const hYn4L2H = RsdPx0["genUA"](GhFbA60);
  let UrCVC5, JZ4zMFc;
  if (Gz8Awqo(await RAE4jg("comp_data_load"), UrCVC5)) {
    if (UrCVC5["rewardProgressItems"] && UrCVC5["rewardProgressItems"]["length"] > 0x0) {
      const NUnwR3 = UrCVC5["rewardProgressItems"][0x0];
      if (NUnwR3) {
        if (tJ16qh(tPxaqq, ga1_lQX(-15))) {
          if (UrCVC5["actBasicInfo"]) {
            const vD2UB9 = UrCVC5["actBasicInfo"]["name"],
              rTVxgMk = UrCVC5["actBasicInfo"]["showExtInfo"]?.["countdownTitle"];
            if (vD2UB9 && true) {
              console["log"](`当前场次：${vD2UB9}`);
            }
            if (rTVxgMk) {
              console["log"](`下一场时间：${rTVxgMk}\n`);
            }
          }
          tPxaqq = true;
        }
        const RT7gp4 = Date["now"](),
          ulPQZe = NUnwR3["rewardOpenTime"];
        let N_C5Y9 = false,
          rk61Wa = 0;
        if (ulPQZe && RT7gp4 < ulPQZe) {
          if (Gz8Awqo(rk61Wa = tJ16qh(ulPQZe - RT7gp4, 0x64, SKYTGJX = -14), rk61Wa) > 0x1b7740) {
            console["log"](`${Z1OnoDo}等待时间超过30分钟，退出脚本`)
            process["exit"](0x0)
          }
          if (rk61Wa > 0x0) {
            N_C5Y9 = true;
          }
        }
        if (N_C5Y9) {
          if (tJ16qh(mI7FLoZ, ga1_lQX(-15)) && true) {
            console["log"](`距离时间还有${Math["floor"](tJ16qh(rk61Wa, 0x3e8, SKYTGJX = -24))}秒，等待中...\n`)
            mI7FLoZ = true
          }
          if (Gz8Awqo(await $["wait"](rk61Wa), await RAE4jg("comp_data_load"), tJ16qh(UrCVC5, ga1_lQX(-0xf)) || tJ16qh(UrCVC5["rewardProgressItems"], ga1_lQX(-15)) || UrCVC5["rewardProgressItems"]["length"] === 0)) {
            return Gz8Awqo(console["log"](`${Z1OnoDo}等待后未获取到数据`), undefined);
          }
          const _stVjS = UrCVC5["rewardProgressItems"][0];
          if (tJ16qh(_stVjS, SKYTGJX = -15)) {
            return Gz8Awqo(console["log"](`${Z1OnoDo}等待后未获取到进度项信息`), undefined);
          }
          JZ4zMFc = _stVjS["rewardReceiveKey"];
        } else {
          JZ4zMFc = NUnwR3["rewardReceiveKey"];
        }
        if (JZ4zMFc) {
          await RAE4jg("comp_data_interact");
        } else {
          const L9_h1Se = N_C5Y9 ? UrCVC5["rewardProgressItems"][0] : NUnwR3;
          if (L9_h1Se["rewardInfoList"] && L9_h1Se["rewardInfoList"]["length"] > 0) {
            const md6_qO = L9_h1Se["rewardInfoList"][0x0];
            if (md6_qO && md6_qO["couponInfo"]) {
              const jUD97j = md6_qO["couponInfo"];
              console["log"](`${Z1OnoDo}[已领取]满${jUD97j["couponQuota"]}减${jUD97j["couponDiscount"]}(${new Date(jUD97j["beginTime"])["toLocaleString"]()}-${new Date(jUD97j["endTime"])["toLocaleString"]()})`);
            } else {
              console["log"](`${Z1OnoDo}💨 空气`);
            }
          } else {
            console["log"](`${Z1OnoDo}💨 空气`);
          }
        }
      } else {
        console["log"](`${Z1OnoDo}未获取到进度项信息`);
      }
    } else {
      console["log"](`${Z1OnoDo}未获取到信息`);
    }
  } else {
    console["log"](`${Z1OnoDo}未获取到数据`);
  }
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  await $["wait"](parseInt(tJ16qh($["waitTime"] * 0x1, 0x1f4, SKYTGJX = 17), 0xa));
  async function V8gb6j(T3QS9n7, Kn8eTI0) {
    try {
      switch (T3QS9n7) {
        case "comp_data_load":
          if (Kn8eTI0["data"]) {
            UrCVC5 = Kn8eTI0["data"];
          } else {
            var eb72rZg = "log";
            msg = RsdPx0["getErrorMsg"](Kn8eTI0["data"])
            console[eb72rZg](`${Z1OnoDo}失败[${Kn8eTI0["code"]}]：${msg}`)
          }
          break;
        case "comp_data_interact":
          if (Kn8eTI0["success"]) {
            if (Gz8Awqo(comp_data_interact = Kn8eTI0["data"], Kn8eTI0["data"] && Kn8eTI0["data"]["rewardInfoList"] && Kn8eTI0["data"]["rewardInfoList"]["length"] > 0x0)) {
              const Sb6Gcuv = Kn8eTI0["data"]["rewardInfoList"][0];
              if (Sb6Gcuv && Sb6Gcuv["couponInfo"]) {
                const Bzy5zX = Sb6Gcuv["couponInfo"];
                if (Gz8Awqo(console["log"](`${Z1OnoDo}✅满${Bzy5zX["couponQuota"]}减${Bzy5zX["couponDiscount"]}(${new Date(Bzy5zX["beginTime"])["toLocaleString"]()}-${new Date(Bzy5zX["endTime"])["toLocaleString"]()})`), WSOSQJ["insert"](`满${Bzy5zX["couponQuota"]}减${Bzy5zX["couponDiscount"]}(${new Date(Bzy5zX["beginTime"])["toLocaleString"]()}-${new Date(Bzy5zX["endTime"])["toLocaleString"]()})`), GfwImcs)) {
                  await K1BX7X["sendNotify"](`${$["name"]}`, `【京东账号${Lr6uxDp}】${GhFbA60}：获得外卖卷，满${Bzy5zX["couponQuota"]}减${Bzy5zX["couponDiscount"]}(${new Date(Bzy5zX["beginTime"])["toLocaleString"]()}-${new Date(Bzy5zX["endTime"])["toLocaleString"]()})，请尽快使用~`);
                }
              } else {
                console["log"](`${Z1OnoDo}💨 空气`);
              }
            } else {
              console["log"](`${Z1OnoDo}💨 空气`);
            }
          } else {
            const rTVxgMk = Kn8eTI0["message"] || "未知错误",
              RT7gp4 = Kn8eTI0["errorCode"] || "unknown";
            console["log"](`${Z1OnoDo}失败[${RT7gp4}]：${rTVxgMk}`);
          }
      }
    } catch (e) {
      console["log"](`❌ 未能正确处理 ${T3QS9n7} 请求响应 ${e["message"] || e}`);
    }
  }
  async function RAE4jg(Lr6uxDp) {
    if ($["runEnd"]) {
      return;
    }
    let agdiHY = '',
      jG0T1j = null,
      eb72rZg = null,
      FLtzwFo = "POST",
      LC8jCq = {},
      UrCVC5 = {};
    switch (Lr6uxDp) {
      case "comp_data_load":
        UrCVC5 = {
          ["appId"]: "ec373",
          ["functionId"]: "comp_data_load",
          ["appid"]: "day_day_reward",
          ["clientVersion"]: RsdPx0["getLatestAppVersion"](),
          ["client"]: "ios",
          ["body"]: {
            ["token"]: mXv6mJ,
            ["commParams"]: {
              ["ubbLoc"]: "ttf.lqzx",
              ["lid"]: "4_50952_60426_0",
              ["client"]: 0,
              ["sdkToken"]: "jdd01URAYXIIMN7Q7GJY7XVOFGTMGLEHG3G2JIK6AFW2IO33UIVTUIAIAWY6JYE3UGDSW7IC3AFZCW4NDMLEDBZT26ZREHZW6MLYVR4PFLFI01234567"
            },
            ["bizParams"]: {
              ["openChannel"]: "jdAppHome",
              ["actKey"]: s6YfyF,
              ["subLabel"]: ''
            }
          },
          ua: hYn4L2H,
          t: true
        }
        LC8jCq = await rDJwEVm["getH5st"](UrCVC5)
        agdiHY = "https://api.m.jd.com/client.action?functionId=comp_data_load"
        jG0T1j = LC8jCq["paramsData"]
        break;
      case "comp_data_interact":
        UrCVC5 = {
          ["appId"]: "93453",
          ["functionId"]: "comp_data_interact",
          ["appid"]: "day_day_reward",
          ["clientVersion"]: RsdPx0["getLatestAppVersion"](),
          ["client"]: "ios",
          ["body"]: {
            ["token"]: mXv6mJ,
            ["fnCode"]: "invoke",
            ["commParams"]: {
              ["longitude"]: '',
              ["latitude"]: '',
              ["ubbLoc"]: "ttf.lqzx",
              ["lid"]: "4_50952_60426_0",
              ["client"]: 0,
              ["sdkToken"]: "jdd01YG5AHZNQU4TUXDWWHFZ7G5SAAJCXWGQWUMQPTWY6BVJJMTTEDYJVZXJSSF3ZHX2UFPU26WZJWZN4GY7TS4QAKPSMUCCDJSBBUTS5AFI01234567"
            },
            ["bizParams"]: {
              ["rewardReceiveKey"]: JZ4zMFc,
              ["openChannel"]: "jdAppHome",
              ["actFlowCode"]: "receiveReward",
              ["actKey"]: s6YfyF,
              ["subLabel"]: ''
            }
          },
          ua: hYn4L2H,
          t: true
        }
        LC8jCq = await rDJwEVm["getH5st"](UrCVC5)
        agdiHY = "https://api.m.jd.com/client.action?functionId=comp_data_interact"
        jG0T1j = LC8jCq["paramsData"]
        break;
      default:
        console["log"](`❌ 未知请求 ${Lr6uxDp}`);
        return;
    }
    const Sb6Gcuv = {};
    if (jG0T1j) {
      Object["assign"](jG0T1j, Sb6Gcuv);
    }
    if (eb72rZg) {
      Object["assign"](eb72rZg, Sb6Gcuv);
    }
    const NUnwR3 = {
      ["url"]: agdiHY,
      ["method"]: FLtzwFo,
      ["headers"]: {
        ["Host"]: "api.m.jd.com",
        ["Origin"]: "https://prodev.m.jd.com",
        ["Content-Type"]: "application/x-www-form-urlencoded",
        ["Cookie"]: T3QS9n7,
        ["User-Agent"]: hYn4L2H
      },
      ["params"]: eb72rZg,
      ["data"]: jG0T1j,
      ["timeout"]: 30000,
      ["httpsTlsOptions"]: {
        ["secureProtocol"]: "TLSv1_2_method",
        ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
      }
    };
    if (FLtzwFo === "GET") {
      delete (delete NUnwR3["data"], NUnwR3["headers"]["Content-Type"]);
    }
    const oUfiq43 = 0x1;
    let Bzy5zX = 0x0,
      Ypv50g_ = null;
    while (Bzy5zX < oUfiq43) {
      if (Bzy5zX > 0) {
        await $["wait"](0x3e8);
      }
      const rTVxgMk = await RsdPx0["request"](NUnwR3);
      if (tJ16qh(rTVxgMk["success"], ga1_lQX(-0xf)) && true) {
        Ypv50g_ = `🚫 ${Lr6uxDp} 请求失败 ➜ ${rTVxgMk["error"]}`
        Bzy5zX++
        continue;
      }
      if (tJ16qh(rTVxgMk["data"], SKYTGJX = -0xf)) {
        Ypv50g_ = `🚫 ${Lr6uxDp} 请求失败 ➜ 无响应数据`
        Bzy5zX++
        continue;
      }
      await V8gb6j(Lr6uxDp, rTVxgMk["data"]);
      break;
    }
    if (Bzy5zX >= oUfiq43) {
      console["log"](Ypv50g_);
    }
  }
}
async function _crHfFz(T3QS9n7) {
  const Kn8eTI0 = 0x3;
  let n6oO3Zr = 0,
    GhFbA60 = null;
  while (n6oO3Zr < Kn8eTI0) try {
    const t0khRB1 = await RsdPx0["request"]({
      ["url"]: T3QS9n7,
      ["method"]: "GET",
      ["headers"]: {
        ["Cookie"]: rk61Wa[0],
        ["User-Agent"]: $.UA
      },
      ["debug"]: false,
      ["timeout"]: 30000
    });
    if (tJ16qh(t0khRB1["success"], ga1_lQX(-0xf))) {
      throw new Error(`请求失败: ${t0khRB1["error"] || "未知错误"}`);
    }
    if (tJ16qh(t0khRB1["data"], ga1_lQX(-15))) {
      throw new Error("响应数据为空");
    }
    const agdiHY = t0khRB1["data"];
    let jG0T1j = null,
      eb72rZg = null;
    try {
      const FLtzwFo = agdiHY["match"](/"token":"([^"]+)"/);
      jG0T1j = FLtzwFo ? FLtzwFo[1] : null;
    } catch (e) {}
    try {
      const LC8jCq = agdiHY["match"](/"ddrActKey":"([^"]+)"/) || agdiHY["match"](/"actKey":"([^"]+)"/);
      eb72rZg = LC8jCq ? LC8jCq[1] : null;
    } catch (e) {}
    if ((tJ16qh(jG0T1j, SKYTGJX = -0xf) || tJ16qh(eb72rZg, ga1_lQX(-15))) && true) {}
    return {
      ["token"]: jG0T1j,
      ["actKey"]: eb72rZg,
      ["data"]: agdiHY
    };
  } catch (e) {
    if (Gz8Awqo(GhFbA60 = e, n6oO3Zr++, n6oO3Zr) < Kn8eTI0) {
      console["log"](`⚠️ 第${n6oO3Zr}次请求失败: ${e["message"]}, 等待${tJ16qh(n6oO3Zr, 0x2, ga1_lQX(-0x8))}秒后重试...`)
      await $["wait"](tJ16qh(n6oO3Zr, 0x7d0, SKYTGJX = -0x8))
    }
  }
  return Gz8Awqo(console["log"](`❌ 达到最大重试次数(${Kn8eTI0}), 最终错误: ${GhFbA60["message"]}`), {
    ["token"]: null,
    ["actKey"]: null,
    ["data"]: null
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}