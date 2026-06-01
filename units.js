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
    name:  'ゴジラ',
    label: 'G',
    color: '#378ADD',
    hp:    200,
    atk:   35,
    movespeed:   1.2,
    range:       60,
    atkInterval: 1200,
    hits:        1,
    hitInterval: 0,
    type:      'ground',
    canAttack: ['ground'],   // 対空不可
    knockback: 0,
    stunDuration: 0,
  },

  mothra: {
    name:  'モスラ',
    label: 'M',
    color: '#1D9E75',
    hp:    120,
    atk:   10,
    movespeed:   2.0,
    range:       90,
    atkInterval: 1200,
    hits:        3,
    hitInterval: 150,
    type:      'flying',
    canAttack: ['ground', 'flying'],
    knockback: 0,
    stunDuration: 0,
  },

  rodan: {
    name:  'ラドン',
    label: 'R',
    color: '#D85A30',
    hp:    150,
    atk:   20,
    movespeed:   1.8,
    range:       70,
    atkInterval: 1100,
    hits:        2,
    hitInterval: 200,
    type:      'flying',
    canAttack: ['ground', 'flying'],
    knockback: 40,           // ノックバックあり
    stunDuration: 0,
  },

  mechagodzilla: {
    name:  'メカゴジラ',
    label: 'MG',
    color: '#EF9F27',
    hp:    180,
    atk:   45,
    movespeed:   1.0,
    range:       80,
    atkInterval: 1400,
    hits:        1,
    hitInterval: 0,
    type:      'ground',
    canAttack: ['ground', 'flying'],
    knockback: 0,
    stunDuration: 800,       // スタンあり（800ms）
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