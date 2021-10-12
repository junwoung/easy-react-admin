function test(region) {
  let url = `https://di6ip8y5.fn.bytedance.net/`;
  switch (region.toLowerCase()) {
    case 'cn':
      url = `https://di6ip8y5.fn.bytedance.net/`;
      break;
    case 'sg':
      url = `https://jejp2a0k.sg-fn.bytedance.net/`;
      break;
    case 'va':
      url = `https://09s20dz6.us-east-fn.bytedance.net/`;
  }
  console.log(url);
}

test('CN');
test('sg');
test('va');
