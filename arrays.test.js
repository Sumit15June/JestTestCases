//to check the aray list items testing 
const BucketList = [
    'travelling',
    'softwareDevelopment',
    'takecareofParents',
 
];
  test('the bucketlist contains travelling', () => {
    expect(BucketList).toContain('travelling');
    

  })