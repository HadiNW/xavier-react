const defaultState = {"loading": false, "error": false, "id":1,"name":"npc_dota_hero_antimage","localized_name":"Masi Loading","primary_attr":"agi","attack_type":"Melee","roles":["Carry","Escape","Nuker"],"img":"/apps/dota2/images/heroes/antimage_full.png?","icon":"/apps/dota2/images/heroes/antimage_icon.png","base_health":200,"base_health_regen":0.25,"base_mana":75,"base_mana_regen":0,"base_armor":-1,"base_mr":25,"base_attack_min":29,"base_attack_max":33,"base_str":23,"base_agi":22,"base_int":12,"str_gain":1.3,"agi_gain":2.8,"int_gain":1.8,"attack_range":150,"projectile_speed":0,"attack_rate":1.4,"move_speed":310,"turn_rate":0.5,"cm_enabled":true,"legs":2,"pro_ban":82,"hero_id":1,"pro_win":29,"pro_pick":49,"3_pick":31742,"3_win":16054,"5_pick":40971,"5_win":21447,"1_pick":2045,"1_win":1030,"2_pick":14347,"2_win":7117,"7_pick":2419,"7_win":1238,"6_pick":13464,"6_win":7038,"8_pick":381,"8_win":205,"4_pick":48634,"4_win":24994}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_API_LOADING':
          return {
            ...state,
            loading: true
          }
    case 'FETCH_API_SUCCESS':
          return {
            ...state,
            ...action.payload,
            loading: false
          }
    case 'FETCH_API_ERROR':
          return {
            ...state,
            loading: false,
            error: true
          }
    default:
      return state
  }
}