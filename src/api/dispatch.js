import request from '@/utils/request'

export function resource_for_snlvs(data) {
    return request({
        url: '/resource/snlvs',
        method: 'get',
        params: data
    })
}

export function resource_for_idc(data) {
    return request({
        url: '/resource/idc',
        method: 'get',
        params: data
    })
}

export function resource_by_view(data) {
    return request({
        url: '/resource/view',
        method: 'get',
        params: data
    })
}

export function vip_check(data) {
    return request({
        url: '/devops/vip_check',
        method: 'get',
        params: data
    })
}

export function get_yundun_bill() {
    return request({
        url: '/yundun/bill',
        method: 'get',
    })
}

export function get_yundun_subuser() {
    return request({
        url: '/yundun/subuser',
        method: 'get',
        params
    })
}

export function get_yundun_host() {
    return request({
        url: '/yundun/host',
        method: 'get',
        params
    })
}
get_yundun_host