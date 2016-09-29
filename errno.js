var all = [
  {
    code: 'E2BIG',
    description: 'argument list too long'
  },{
    code: 'EACCES',
    description: 'permission denied'
  },{
    code: 'EADDRINUSE',
    description: 'address already in use'
  },{
    code: 'EADDRNOTAVAIL',
    description: 'address not available'
  },{
    code: 'EAFNOSUPPORT',
    description: 'address family not supported'
  },{
    code: 'EAGAIN',
    description: 'resource temporarily unavailable'
  },{
    code: 'EAI_ADDRFAMILY',
    description: 'address family not supported'
  },{
    code: 'EAI_AGAIN',
    description: 'temporary failure'
  },{
    code: 'EAI_BADFLAGS',
    description: 'bad ai_flags value'
  },{
    code: 'EAI_BADHINTS',
    description: 'invalid value for hints'
  },{
    code: 'EAI_CANCELED',
    description: 'request canceled'
  },{
    code: 'EAI_FAIL',
    description: 'permanent failure'
  },{
    code: 'EAI_FAMILY',
    description: 'ai_family not supported'
  },{
    code: 'EAI_MEMORY',
    description: 'out of memory'
  },{
    code: 'EAI_NODATA',
    description: 'no address'
  },{
    code: 'EAI_NONAME',
    description: 'unknown node or service'
  },{
    code: 'EAI_OVERFLOW',
    description: 'argument buffer overflow'
  },{
    code: 'EAI_PROTOCOL',
    description: 'resolved protocol is unknown'
  },{
    code: 'EAI_SERVICE',
    description: 'service not available for socket type'
  },{
    code: 'EAI_SOCKTYPE',
    description: 'socket type not supported'
  },{
    code: 'EALREADY',
    description: 'connection already in progress'
  },{
    code: 'EBADF',
    description: 'bad file descriptor'
  },{
    code: 'EBUSY',
    description: 'resource busy or locked'
  },{
    code: 'ECANCELED',
    description: 'operation canceled'
  },{
    code: 'ECHARSET',
    description: 'invalid Unicode character'
  },{
    code: 'ECONNABORTED',
    description: 'software caused connection abort'
  },{
    code: 'ECONNREFUSED',
    description: 'connection refused'
  },{
    code: 'ECONNRESET',
    description: 'connection reset by peer'
  },{
    code: 'EDESTADDRREQ',
    description: 'destination address required'
  },{
    code: 'EEXIST',
    description: 'file already exists'
  },{
    code: 'EFAULT',
    description: 'bad address in system call argument'
  },{
    code: 'EFBIG',
    description: 'file too large'
  },{
    code: 'EHOSTUNREACH',
    description: 'host is unreachable'
  },{
    code: 'EINTR',
    description: 'interrupted system call'
  },{
    code: 'EINVAL',
    description: 'invalid argument'
  },{
    code: 'EIO',
    description: 'i/o error'
  },{
    code: 'EISCONN',
    description: 'socket is already connected'
  },{
    code: 'EISDIR',
    description: 'illegal operation on a directory'
  },{
    code: 'ELOOP',
    description: 'too many symbolic links encountered'
  },{
    code: 'EMFILE',
    description: 'too many open files'
  },{
    code: 'EMSGSIZE',
    description: 'message too long'
  },{
    code: 'ENAMETOOLONG',
    description: 'name too long'
  },{
    code: 'ENETDOWN',
    description: 'network is down'
  },{
    code: 'ENETUNREACH',
    description: 'network is unreachable'
  },{
    code: 'ENFILE',
    description: 'file table overflow'
  },{
    code: 'ENOBUFS',
    description: 'no buffer space available'
  },{
    code: 'ENODEV',
    description: 'no such device'
  },{
    code: 'ENOENT',
    description: 'no such file or directory'
  },{
    code: 'ENOMEM',
    description: 'not enough memory'
  },{
    code: 'ENONET',
    description: 'machine is not on the network'
  },{
    code: 'ENOPROTOOPT',
    description: 'protocol not available'
  },{
    code: 'ENOSPC',
    description: 'no space left on device'
  },{
    code: 'ENOSYS',
    description: 'function not implemented'
  },{
    code: 'ENOTCONN',
    description: 'socket is not connected'
  },{
    code: 'ENOTDIR',
    description: 'not a directory'
  },{
    code: 'ENOTEMPTY',
    description: 'directory not empty'
  },{
    code: 'ENOTSOCK',
    description: 'socket operation on non-socket'
  },{
    code: 'ENOTSUP',
    description: 'operation not supported on socket'
  },{
    code: 'EPERM',
    description: 'operation not permitted'
  },{
    code: 'EPIPE',
    description: 'broken pipe'
  },{
    code: 'EPROTO',
    description: 'protocol error'
  },{
    code: 'EPROTONOSUPPORT',
    description: 'protocol not supported'
  },{
    code: 'EPROTOTYPE',
    description: 'protocol wrong type for socket'
  },{
    code: 'ERANGE',
    description: 'result too large'
  },{
    code: 'EROFS',
    description: 'read-only file system'
  },{
    code: 'ESHUTDOWN',
    description: 'cannot send after transport endpoint shutdown'
  },{
    code: 'ESPIPE',
    description: 'invalid seek'
  },{
    code: 'ESRCH',
    description: 'no such process'
  },{
    code: 'ETIMEDOUT',
    description: 'connection timed out'
  },{
    code: 'ETXTBSY',
    description: 'text file is busy'
  },{
    code: 'EXDEV',
    description: 'cross-device link not permitted'
  },{
    code: 'UNKNOWN',
    description: 'unknown error'
  },{
    code: 'EOF',
    description: 'end of file'
  },{
    code: 'ENXIO',
    description: 'no such device or address'
  },{
    code: 'EMLINK',
    description: 'too many links'
  },{
    code: 'EHOSTDOWN',
    description: 'host is down'
  }
]

module.exports.code = {}

all.forEach(function (error) {
  module.exports.code[error.code] = error.description
})
