// =============================================
// units.js - ユニットステータス管理
// =============================================
//
// 【攻撃パラメータ】
// atkInterval  : 攻撃クールタイム (ms)
// hits         : 1回の攻撃のヒット数（省略=1）
// hitInterval  : 多段ヒットの間隔 (ms)（省略=100）
// atk          : 1ヒットのダメージ
//
// 【タイプ・対空】
// type         : "ground" or "flying"
// canAttack    : ["ground"] / ["flying"] / ["ground","flying"]
//
// 【ノックバック】
// knockback    : ヒット時に相手を後退させる距離 (px)
//                省略または0で無効
//
// 【スタン】
// stunDuration : ヒット時に相手を行動不能にする時間 (ms)
//                省略または0で無効
//
// =============================================

const UNITS = {

  godzilla: {
    name:  'ゴジラ 1989',
    label: 'G',
    color: '#378ADD',
    hp:    924,
    atk:   288,
    movespeed:   1.4,
    range:       40,
    atkInterval: 2600,
    hits:        1,
    hitInterval: 0,
    type:      'ground',
    canAttack: ['ground'],   // 対空不可
    knockback: 0,
    stunDuration: 0,
  },

  mothra: {
    name:  'モスラ 1992',
    label: 'M',
    color: '#1D9E75',
    hp:    904,
    atk:   33,
    movespeed:   1.8,
    range:       50,
    atkInterval: 2000,
    hits:        10,
    hitInterval: 180,
    type:      'flying',
    canAttack: ['ground', 'flying'],
    knockback: 0,
    stunDuration: 0,
  },

  rodan: {
    name:  'ファイアーラドン 1993',
    label: 'R',
    color: '#D85A30',
    hp:    1188,
    atk:   234,
    movespeed:   2.0,
    range:       65,
    atkInterval: 2500,
    hits:        1,
    hitInterval: 0,
    type:      'flying',
    canAttack: ['ground', 'flying'],
    knockback: 0,           // ノックバックあり
    stunDuration: 0,
  },

  mechagodzilla: {
    name:  'キングギドラ 1991',
    label: 'KG',
    color: '#d4ef27',
    hp:    1374,
    atk:   338,
    movespeed:   1.2,
    range:       69,
    atkInterval: 2800,
    hits:        1,
    hitInterval: 0,
    type:      'flying',
    canAttack: ['ground', 'flying'],
    knockback: 0,
    stunDuration: 0,       // スタンあり（800ms）
  },

  // ↓ 新しいユニットはここに追加！
  // kingghidorah: {
  //   name:        'キングギドラ',
  //   label:       'KG',
  //   color:       '#C0A020',
  //   hp:          250,
  //   atk:         20,
  //   movespeed:   0.9,
  //   range:       100,
  //   atkInterval: 1600,
  //   hits:        3,
  //   hitInterval: 120,
  //   type:        'flying',
  //   canAttack:   ['ground', 'flying'],
  //   knockback:   60,
  //   stunDuration: 500,
  // },

};